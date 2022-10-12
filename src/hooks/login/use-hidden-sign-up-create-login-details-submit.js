import { useState } from "react";
import { useDispatch } from "react-redux";

import useErrorSwal from "../errors/use-error-swal";

import { passwordsDontMatchMessage } from "../../resuable-messages/reusable-messages";

const useHiddenSignUpCreateLoginDetailsSubmit = () => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const { errorSwal } = useErrorSwal();

  const { displayName, email, password, confirmPassword } = userCredentials;

  const dispatch = useDispatch();

  const hiddenSignUpCreateLoginDetailsSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      errorSwal(passwordsDontMatchMessage);
      return;
    } else {
      await dispatch({
        type: "SIGN_UP_START",
        payload: { displayName, email, password },
      });
      setIsLoading(true);
      setIsDisabled(true);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return {
    isLoading,
    isDisabled,
    displayName,
    email,
    password,
    confirmPassword,
    handleChange,
    hiddenSignUpCreateLoginDetailsSubmit,
  };
};

export default useHiddenSignUpCreateLoginDetailsSubmit;
