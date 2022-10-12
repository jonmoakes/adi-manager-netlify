import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectError } from "../../redux/user/user.selectors";

import useErrorSwal from "../errors/use-error-swal";

// onSubmit sets off the saga listener which sets off the signInWithEmail generator function.
// if there's an error, the error message is passed to the reducer which is retrieved here & displayed in the swal.
// Error is reset after to avoid a loop of error messages.

const useHandleLogin = () => {
  const [userCredentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const { errorSwal } = useErrorSwal();

  const error = useSelector(selectError);
  const dispatch = useDispatch();

  const { email, password } = userCredentials;

  useEffect(() => {
    if (error) {
      setIsLoading(false);
      setIsDisabled(false);
      errorSwal(error);
      dispatch({ type: "RESET_ERROR" });
      setCredentials({ email: "", password: "" });
    }
  }, [dispatch, error, errorSwal]);

  const handleChange = (event) => {
    const { value, name } = event.target;
    setCredentials({ ...userCredentials, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setIsDisabled(true);
    await dispatch({
      type: "EMAIL_SIGN_IN_START",
      payload: { email, password },
    });
  };

  return { isLoading, isDisabled, email, password, handleChange, handleSubmit };
};

export default useHandleLogin;
