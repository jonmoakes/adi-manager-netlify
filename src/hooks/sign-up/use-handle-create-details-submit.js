import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { selectErrorMessage } from "../../store/error/error.selector";
import { clearErrorMessage } from "../../store/error/error.action";
import { addCustomerDetails } from "../../store/customer/customer.action";

import useFireSwal from "../swals/use-fire-swal";

import {
  passwordsDontMatchMessage,
  emailsDontMatchMessage,
  passwordLengthError,
  createSubscriptionPath,
} from "../../strings/strings";

const useHandleCreateDetailsSubmit = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [userCredentials, setUserCredentials] = useState({
    displayName: "",
    email: "",
    confirmEmail: "",
    password: "",
    confirmPassword: "",
  });
  const { fireSwal } = useFireSwal();
  const errorMessage = useSelector(selectErrorMessage);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { displayName, email, confirmEmail, password, confirmPassword } =
    userCredentials;

  const customerDetails = {
    displayName,
    email,
    password,
  };

  const handleCreateDetailsChange = (event) => {
    const { name, value } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const handleCreateDetailsSubmit = async (e) => {
    e.preventDefault();
    if (errorMessage) {
      dispatch(clearErrorMessage());
    }
    setIsLoading(true);

    if (password.length < 6) {
      setIsLoading(false);
      fireSwal("error", passwordLengthError, "", 0, true, false);
    } else if (password !== confirmPassword) {
      setIsLoading(false);
      fireSwal("error", passwordsDontMatchMessage, "", 0, true, false);
    } else if (email !== confirmEmail) {
      setIsLoading(false);
      fireSwal("error", emailsDontMatchMessage, "", 0, true, false);
    } else {
      dispatch(addCustomerDetails(customerDetails));
      navigate(createSubscriptionPath);
    }
  };

  return {
    isLoading,
    handleCreateDetailsChange,
    handleCreateDetailsSubmit,
    userCredentials,
  };
};

export default useHandleCreateDetailsSubmit;
