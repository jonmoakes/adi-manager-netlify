import { useSelector } from "react-redux";

import { selectSubscriptionData } from "../../../store/customer/customer.selector";

import { HighlightText } from "../../../styles/span/span.styles";

const SubscriptionCancelled = () => {
  const subscriptionData = useSelector(selectSubscriptionData);
  const { status, canceled_at, current_period_end } = subscriptionData;

  const timeStamp = canceled_at * 1000;
  const dateFromTimeStamp = new Date(timeStamp).toDateString();

  const periodEndsTimeStamp = current_period_end * 1000;
  const dateFromPeriodEndsTimeStamp = new Date(
    periodEndsTimeStamp
  ).toDateString();

  return (
    <>
      {canceled_at && (
        <>
          <p>
            you cancelled your subscription on:
            <br />
            <HighlightText>{dateFromTimeStamp}</HighlightText>
          </p>
          <p>
            your access to the app will continue until{" "}
            <HighlightText>{dateFromPeriodEndsTimeStamp}</HighlightText>.
          </p>
          <hr />
        </>
      )}
      {!canceled_at && (
        <>
          <p>
            your subscription is currently:
            <br />
            <HighlightText>{status}</HighlightText>
          </p>
          <p>
            and will auto renew on:
            <br />
            <HighlightText>{dateFromPeriodEndsTimeStamp}</HighlightText>
          </p>
          <hr />
        </>
      )}
    </>
  );
};

export default SubscriptionCancelled;
