import { useSelector } from "react-redux";
import { selectSubscriptionPrice } from "../../store/customer/customer.selector";

import { Heading } from "../../styles/h1/h1.styles";
import { Div } from "../../styles/div/div.styles";

const ConfirmInfo = () => {
  const subscriptionPrice = useSelector(selectSubscriptionPrice);

  return (
    <>
      <Div>
        <Heading>confirm & purchase your subscription</Heading>
      </Div>
      <Div>
        {subscriptionPrice === 2000 && (
          <>
            <p>
              you are about to purchase the ADI Manager monthly subscription.
            </p>
            <p>you will be charged £2 per month.</p>
          </>
        )}
        {subscriptionPrice === 21000 && (
          <>
            <p>
              you are about to purchase the ADI Manager yearly subscription.
            </p>
            <p>you will be charged £21 a year.</p>
          </>
        )}
        <p>
          if you wish to continue, please enter your card details below and then
          tap the "complete purchase" button which will appear once the form has
          been completed.
        </p>
      </Div>
    </>
  );
};

export default ConfirmInfo;
