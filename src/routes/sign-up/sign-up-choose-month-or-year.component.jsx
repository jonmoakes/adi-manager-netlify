import useSignUpFunctions from "./use-sign-up-functions";
import useShowHide from "../../hooks/use-show-hide";

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
  const { showComponent, showData, hideData } = useShowHide();

  return (
    <Div>
      {hideData && (
        <TermsReadButton onClick={showComponent}>
          I Have Read & Accepted The Terms & Conditions.
        </TermsReadButton>
      )}

      {showData && (
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
              <MonthlyPriceSpan>£2 A Month!</MonthlyPriceSpan>
            </p>
            <p>
              that's Just{" "}
              <MonthlyPriceSpan>46 pence Per Week!</MonthlyPriceSpan>
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
              billed yearly at just <HighlightText>£21 per year!</HighlightText>
            </p>
            <p>
              <HighlightText>10% off</HighlightText> the monthly price!
            </p>
            <p>
              that's Just <HighlightText>40 pence Per Week</HighlightText>!
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
