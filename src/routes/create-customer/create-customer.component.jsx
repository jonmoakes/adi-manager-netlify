import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { selectCustomerDetails } from "../../store/customer/customer.selector";
import { addCustomerId } from "../../store/customer/customer.action";

import { NoHeaderFooterContainer } from "../../styles/container/container.styles";
import { Div } from "../..//styles/div/div.styles";
import { Heading } from "../../styles/h1/h1.styles";

import { createSubscriptionPath } from "../../strings/strings";

const CreateCustomer = () => {
  const customerDetails = useSelector(selectCustomerDetails);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { email, displayName } = customerDetails;

  const shouldCreate = useRef(true);
  useEffect(() => {
    async function createCustomer() {
      if (shouldCreate.current) {
        shouldCreate.current = false;
        const response = await fetch("/.netlify/functions/create-customer", {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: email, name: displayName }),
        })
          .then((response) => response.json())
          .catch((error) => {
            console.error("There was an error!", error);
          });
        dispatch(addCustomerId(response.id));
        navigate(createSubscriptionPath);
      }
    }
    createCustomer();
  }, [dispatch, displayName, email, navigate]);

  return (
    <NoHeaderFooterContainer>
      <Div>
        <Heading>creating customer.... please wait</Heading>
      </Div>
    </NoHeaderFooterContainer>
  );
};

export default CreateCustomer;
