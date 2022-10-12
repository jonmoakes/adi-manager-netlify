import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import useCreateCustomer from "../../hooks/login/use-create-customer";
import { selectCustomerId } from "../../store/customer/customer.selector";

import { NoHeaderFooterContainer } from "../../styles/container/container.styles";
import { Div } from "../..//styles/div/div.styles";
import { Heading } from "../../styles/h1/h1.styles";

import { createSubscriptionPath } from "../../strings/strings";

const CustomerCreationPage = () => {
  useCreateCustomer();
  const id = useSelector(selectCustomerId);

  return (
    <NoHeaderFooterContainer>
      {id && <Navigate replace to={createSubscriptionPath} />}
      <Div>
        <Heading>creating customer.... please wait</Heading>
      </Div>
    </NoHeaderFooterContainer>
  );
};

export default CustomerCreationPage;
