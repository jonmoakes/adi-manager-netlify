import { useSelector } from "react-redux";

import { selectSubscriptionData } from "../../../store/customer/customer.selector";

import { HighlightText } from "../../../styles/span/span.styles";

const CurrentPeriodStart = () => {
  const subscriptionData = useSelector(selectSubscriptionData);
  const { current_period_start } = subscriptionData;

  const timeStamp = current_period_start * 1000;
  const dateFromTimeStamp = new Date(timeStamp).toDateString();
  return (
    <>
      <p>
        your current subscription period started on:
        <br />
        <HighlightText>{dateFromTimeStamp}</HighlightText>
      </p>
      <hr />
    </>
  );
};

export default CurrentPeriodStart;
