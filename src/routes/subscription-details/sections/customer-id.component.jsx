import { useSelector } from "react-redux";

import { selectSubscriptionData } from "../../../store/customer/customer.selector";

import { HighlightText } from "../../../styles/span/span.styles";

const CustomerId = () => {
  const subscriptionData = useSelector(selectSubscriptionData);
  const { customerId } = subscriptionData;
  return (
    <>
      <p>
        Your Customer Id is:
        <br />
        <HighlightText>{customerId}</HighlightText>
      </p>
      <hr />
    </>
  );
};

export default CustomerId;
