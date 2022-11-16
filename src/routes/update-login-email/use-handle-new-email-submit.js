import { useState } from "react";
import { useDispatch } from "react-redux";
import { auth, db } from "../../utils/firebase/firebase.utils";
import { updateEmail } from "firebase/auth";
import { doc, getDoc, updateDoc } from "firebase/firestore";

import useFireSwal from "../../hooks/use-fire-swal";

import { startLoader, stopLoader } from "../../store/loader/loader.action";
import { setErrorMessage } from "../../store/error/error.action";

import {
  emailChangeSuccessMessage,
  needToLogOutMessage,
} from "../../strings/strings";

import { longReload } from "../../reusable-functions/long-reload";

const useHandleNewEmailSubmit = () => {
  const { fireSwal } = useFireSwal();

  const [isDisabled, setIsDisabled] = useState(false);
  const [userCredentials, setUserCredentials] = useState({
    currentEmail: "",
    newEmail: "",
    confirmEmail: "",
  });

  const dispatch = useDispatch();
  const { newEmail } = userCredentials;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const handleNewEmailSubmit = async () => {
    const currentUser = auth.currentUser;
    const userRef = doc(db, "users", auth.currentUser.uid);
    const userSnapshot = await getDoc(userRef);

    const updateFirestoreEmail = async () => {
      await updateDoc(userRef, {
        email: newEmail,
      });
    };

    try {
      if (!currentUser || !userSnapshot) return;
      setIsDisabled(true);
      dispatch(startLoader());
      await updateEmail(auth.currentUser, newEmail)
        .then(() => {
          fireSwal("success", emailChangeSuccessMessage, "", 6500, false, true);
          auth.signOut();
          longReload();
        })
        .then(updateFirestoreEmail())
        .catch(() => {
          setIsDisabled(false);
          dispatch(stopLoader());
          fireSwal("success", needToLogOutMessage, "", 6500, false, false);
          auth.signOut();
          longReload();
        });
    } catch (error) {
      dispatch(stopLoader());
      dispatch(setErrorMessage(error.message));
      setUserCredentials({ email: "", confirmEmail: "" });
      setIsDisabled(false);
    }
  };

  return {
    isDisabled,
    handleChange,
    handleNewEmailSubmit,
    userCredentials,
  };
};

export default useHandleNewEmailSubmit;
