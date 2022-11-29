import { useSelector } from "react-redux";

import { selectSubscriptionData } from "../../../store/customer/customer.selector";

import { HighlightText } from "../../../styles/span/span.styles";

const SubscriptionId = () => {
  const subscriptionData = useSelector(selectSubscriptionData);
  const { subscriptionId } = subscriptionData;

  return (
    <>
      <p>
        Your Subscription Id is:
        <br />
        <HighlightText className="truncate">{subscriptionId}</HighlightText>
      </p>
      <hr />
    </>
  );
};

export default SubscriptionId;
