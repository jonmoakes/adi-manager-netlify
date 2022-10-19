import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { addCustomerDetails } from "../../store/customer/customer.action";

import useFireSwal from "../../hooks/use-fire-swal";

import {
  passwordsDontMatchMessage,
  emailsDontMatchMessage,
  passwordLengthError,
  EmailAlreadyInUseMessage,
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

    const response = await fetch("/.netlify/functions/fetch-customers-list", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
      }),
    });

    const data = await response.json();
    const { customers } = data;

    if (customers.data.length > 0) {
      fireSwal("error", EmailAlreadyInUseMessage, "", 0, true, false);
      return;
    } else if (password.length < 6) {
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
