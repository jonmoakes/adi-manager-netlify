import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import { selectCustomerDetails } from "../../store/customer/customer.selector";
import { addCustomerId } from "../../store/customer/customer.action";

const useCreateCustomer = () => {
  const customerDetails = useSelector(selectCustomerDetails);
  const dispatch = useDispatch();

  const { email, displayName } = customerDetails;

  useEffect(() => {
    async function createCustomer() {
      await axios
        .post("/.netlify/functions/create-customer", {
          email: email,
          description: displayName,
        })
        .then(
          (response) => {
            dispatch(addCustomerId(response.data.id));
          },
          (error) => {
            console.log(error.message);
          }
        );
    }
    createCustomer();
  }, [dispatch, displayName, email]);
};

export default useCreateCustomer;
