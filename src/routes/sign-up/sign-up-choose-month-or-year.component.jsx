import { useState } from "react";

import useSignUpFunctions from "./use-sign-up-functions.js";

import {
  Div,
  MonthlyPriceOptionDiv,
  YearPriceOptionDiv,
} from "../../styles/div/div.styles";
import {
  TermsReadButton,
  ChoosePaymentMethodButton,
} from "../../styles/buttons/buttons.styles";
import { HighlightText, MonthlyPriceSpan } from "../../styles/span/span.styles";

const SignUpChooseMonthOrYear = () => {
  const {
    chooseMonthAndPushToCreateDetails,
    chooseYearAndPushToCreateDetails,
  } = useSignUpFunctions();
  const [showSubscriptionOptions, setShowSubscriptionOptions] = useState(false);

  return (
    <Div>
      {!showSubscriptionOptions && (
        <TermsReadButton onClick={() => setShowSubscriptionOptions(true)}>
          I Have Read & Accepted The Terms & Conditions.
        </TermsReadButton>
      )}

      {showSubscriptionOptions && (
        <>
          <p>thanks!</p>
          <p>
            firstly, please choose whether you'd like to purchase a monthly plan
            or a yearly plan.
          </p>
          <hr />

          <MonthlyPriceOptionDiv>
            <h2>Monthly subscription</h2>
            <p>
              Billed monthly at just{" "}
              <MonthlyPriceSpan>£4 A Month!</MonthlyPriceSpan>
            </p>
            <p>
              that's Just{" "}
              <MonthlyPriceSpan>93 pence Per Week!</MonthlyPriceSpan>
            </p>

            <ChoosePaymentMethodButton
              onClick={chooseMonthAndPushToCreateDetails}
            >
              Select Monthly
            </ChoosePaymentMethodButton>
          </MonthlyPriceOptionDiv>

          <hr />

          <YearPriceOptionDiv>
            <h2>yearly subscription</h2>
            <p>
              billed yearly at just <HighlightText>£43 per year!</HighlightText>
            </p>
            <p>
              <HighlightText>10% off</HighlightText> the monthly price!
            </p>
            <p>
              that's Just <HighlightText>83 pence Per Week</HighlightText>!
            </p>

            <ChoosePaymentMethodButton
              onClick={chooseYearAndPushToCreateDetails}
            >
              Select Yearly
            </ChoosePaymentMethodButton>
          </YearPriceOptionDiv>
          <hr />
        </>
      )}
    </Div>
  );
};

export default SignUpChooseMonthOrYear;
