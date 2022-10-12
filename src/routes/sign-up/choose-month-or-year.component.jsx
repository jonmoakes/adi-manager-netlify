import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { addSubscriptionPrice } from "../../store/customer/customer.action";

import ChooseInfo from "./choose-info.component";
import MonthInfo from "./month-info";
import YearInfo from "./year-info.component";

import {
  Div,
  MonthlyPriceOptionDiv,
  YearPriceOptionDiv,
} from "../../styles/div/div.styles";
import { TermsReadButton, ChoosePaymentMethodButton } from "../../styles/buttons/buttons.styles";

import { createLoginDetailsPath } from "../../strings/strings";

const ChooseMonthOrYear = () => {
  const [showSubscriptionOptions, setShowSubscriptionOptions] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function chooseMonthAndPushToCreateDetails() {
    dispatch(addSubscriptionPrice(4000));
    navigate(createLoginDetailsPath);
  }

  function chooseYearAndPushToCreateDetails() {
    dispatch(addSubscriptionPrice(43000));
    navigate(createLoginDetailsPath);
  }

  return (
    <Div>
      {!showSubscriptionOptions && (
        <TermsReadButton
          onClick={() => setShowSubscriptionOptions(true)}
        >
          I Have Read & Accepted The Terms & Conditions.
        </TermsReadButton>
      )}

      {showSubscriptionOptions && (
        <>
          <ChooseInfo />

          <MonthlyPriceOptionDiv>
            <MonthInfo />
            <ChoosePaymentMethodButton onClick={chooseMonthAndPushToCreateDetails}>
              Select Monthly
            </ChoosePaymentMethodButton>
          </MonthlyPriceOptionDiv>
          <hr />
          <YearPriceOptionDiv>
            <YearInfo />
            <ChoosePaymentMethodButton onClick={chooseYearAndPushToCreateDetails}>
              Select Yearly
            </ChoosePaymentMethodButton>
          </YearPriceOptionDiv>
          <hr />
        </>
      )}
    </Div>
  );
};

export default ChooseMonthOrYear;
