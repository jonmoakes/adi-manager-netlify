import { useSelector } from "react-redux";
import { selectSubscriptionPrice } from "../../store/customer/customer.selector";

import { Div } from "../../styles/div/div.styles";

const ConfirmInfo = () => {
  const subscriptionPrice = useSelector(selectSubscriptionPrice);

  return (
    <>
      <Div>
        <h1>confirm & purchase your subscription</h1>
      </Div>
      <Div>
        {subscriptionPrice === 4000 && (
          <>
            <p>
              you are about to purchase the ADI Manager monthly subscription.
            </p>
            <p>you will be charged £4 per month.</p>
          </>
        )}
        {subscriptionPrice === 43000 && (
          <>
            <p>
              you are about to purchase the ADI Manager yearly subscription.
            </p>
            <p>you will be charged £43 a year.</p>
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
