import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import  axios from "axios";

import { selectCustomerDetails } from "../../store/customer/customer.selector";
import { addCustomerId } from "../../store/customer/customer.action";
import { setErrorMessage} from "../../store/error/error.action"
import { startLoader, stopLoader } from "../../store/loader/loader.action";

import { createSubscriptionPath } from "../../strings/strings";

const useHandleCreateCustomer = () => {
    const customerDetails = useSelector(selectCustomerDetails);
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    const { email, displayName } = customerDetails;
    const shouldCreate = useRef(true);

    useEffect(() => {
     
        const createCustomer = async () => {
          if (shouldCreate.current) {
            shouldCreate.current = false;
            dispatch(startLoader())
    
            await axios.post('/.netlify/functions/create-customer', {
              email: email,
              name: displayName
            })
            .then((response) => {
                dispatch(stopLoader())
                dispatch(addCustomerId(response.data.id));
                navigate(createSubscriptionPath);
            }, (error) => {
                dispatch(stopLoader())
                setErrorMessage(error.message)
                console.log(error);
            });
          }
        }
        createCustomer();
      }, [dispatch, displayName, email, navigate]);
}

export default useHandleCreateCustomer;