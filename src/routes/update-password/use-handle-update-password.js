import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { auth } from "../../utils/firebase/firebase.utils";
import { updatePassword } from "firebase/auth";

import useFireSwal from "../../hooks/use-fire-swal";

import { selectErrorMessage } from "../../store/error/error.selector";
import { setErrorMessage } from "../../store/error/error.action";
import { startLoader, stopLoader } from "../../store/loader/loader.action";

import {
  passwordResetSuccessMessage,
  needToLogOutMessage,
} from "../../strings/strings";

import { longReload } from "../../reusable-functions/long-reload";

const useHandleUpdatePassword = () => {
  const { fireSwal } = useFireSwal();

  const [isDisabled, setIsDisabled] = useState(false);
  const [userCredentials, setUserCredentials] = useState({
    newPassword: "",
    confirmNewPassword: "",
  });

  const errorMessage = useSelector(selectErrorMessage);
  const dispatch = useDispatch();
  const { newPassword } = userCredentials;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const handleUpdatePassword = async () => {
    const currentUser = auth.currentUser;
    dispatch(startLoader());
    setIsDisabled(true);

    try {
      if (!currentUser) return;
      await updatePassword(auth.currentUser, newPassword)
        .then(() => {
          fireSwal(
            "success",
            passwordResetSuccessMessage,
            "",
            6500,
            false,
            true
          );
          auth.signOut();
          longReload();
        })
        .catch(() => {
          dispatch(stopLoader());
          fireSwal("info", needToLogOutMessage, "", 6500, false, false);
          auth.signOut();
          longReload();
        });
    } catch (error) {
      dispatch(stopLoader());
      dispatch(setErrorMessage(error.message));
      setIsDisabled(false);
      setUserCredentials({ newPassword: "", confirmNewPassword: "" });
    }
  };

  return {
    isDisabled,
    errorMessage,
    userCredentials,
    handleChange,
    handleUpdatePassword,
  };
};

export default useHandleUpdatePassword;
