import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { addCustomerDetails } from "../../store/customer/customer.action";

import useFireSwal from "../../hooks/use-fire-swal";

import {
  passwordsDontMatchMessage,
  emailsDontMatchMessage,
  passwordLengthError,
  createSubscriptionPath,
} from "../../strings/strings";

const useCreateLoginDetailsSubmit = () => {
  const [loginDetails, setLoginDetails] = useState({
    displayName: "",
    email: "",
    confirmEmail: "",
    password: "",
    confirmPassword: "",
  });
  const { fireSwal } = useFireSwal();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { displayName, email, confirmEmail, password, confirmPassword } =
    loginDetails;

  const customerDetails = {
    displayName,
    email,
    password,
  };

  const handleCreateDetailsChange = (event) => {
    const { name, value } = event.target;
    setLoginDetails({ ...loginDetails, [name]: value });
  };

  const handleCreateDetailsSubmit = async (e) => {
    e.preventDefault();

    if (password.length < 6) {
      fireSwal("error", passwordLengthError, "", 0, true, false);
    } else if (password !== confirmPassword) {
      fireSwal("error", passwordsDontMatchMessage, "", 0, true, false);
    } else if (email !== confirmEmail) {
      fireSwal("error", emailsDontMatchMessage, "", 0, true, false);
    } else {
      dispatch(addCustomerDetails(customerDetails));
      navigate(createSubscriptionPath);
    }
  };

  return {
    loginDetails,
    handleCreateDetailsChange,
    handleCreateDetailsSubmit,
  };
};

export default useCreateLoginDetailsSubmit;
