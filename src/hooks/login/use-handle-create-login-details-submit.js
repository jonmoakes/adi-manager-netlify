import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { selectErrorMessage } from "../../store/error/error.selector";
import { clearErrorMessage } from "../../store/error/error.action";
import { addCustomerDetails } from "../../store/customer/customer.action";

import useFireSwal from "../swals/use-fire-swal";

import {
  passwordsDontMatchMessage,
  emailsDontMatchMessage,
  customerCreationPath,
  emailAlreadyInUse,
} from "../../strings/strings";

const useHandleCreateLoginDetailsSubmit = () => {
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
    }

  const handleCreateDetailsChange = (event) => {
    const { name, value } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const handleCreateDetailsSubmit = async (e) => {
    e.preventDefault();
    if (errorMessage) {
      dispatch(clearErrorMessage())
    }
    setIsLoading(true);

    await axios.post("/.netlify/functions/fetch-customers-list").then(
      (response) => {
        console.log("loipouio ", response)
        setIsLoading(false);
        const { data } = response.data;
        const customerList = data;

        if (customerList) {
          const matchedCustomer = data.find(
            (customer) => customer.email === email
          );

          if (matchedCustomer) {
            fireSwal("error", emailAlreadyInUse, "", 0, true, false);
            return;
          }

          if (password !== confirmPassword) {
            fireSwal("error", passwordsDontMatchMessage, "", 0, true, false);
          } else if (email !== confirmEmail) {
            fireSwal("error", emailsDontMatchMessage, "", 0, true, false);
          } else {
            dispatch(addCustomerDetails(customerDetails));
           navigate(customerCreationPath);
          }
        }
      },
      (error) => {
        setIsLoading(false);
        selectErrorMessage(error.message)
        return;
      }
    );
  };

  return {
    isLoading,
    handleCreateDetailsChange,
    handleCreateDetailsSubmit,
    userCredentials,
    prompt,
  };
};

export default useHandleCreateLoginDetailsSubmit;
