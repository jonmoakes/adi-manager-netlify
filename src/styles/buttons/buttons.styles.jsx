import styled, { css, keyframes } from "styled-components";
import {
  slideInLeft,
  slideInRight,
  bounceInDown,
  pulse,
  zoomInLeft,
  zoomInRight,
} from "react-animations";

import { ReactComponent as SearchInfoSVG } from "../../assets/info.svg";

const slideInLeftAnimation = keyframes`${slideInLeft}`;
const slideInRightAnimation = keyframes`${slideInRight}`;
const bounceInDownAnimation = keyframes`${bounceInDown}`;
const PulseAnimation = keyframes`${pulse}`;
const zoomInLeftAnimation = keyframes`${zoomInLeft}`;
const zoomInRightAnimation = keyframes`${zoomInRight}`;
const buttonStyles = css`
  background-color: #247afd;
`;

const isGrade1ButtonStyles = css`
  background-color: red;
`;

const isGradeTwoToFourButtonStyles = css`
  background-color: #ffe61b;
  color: black;
  text-shadow: none;
`;

const isGradeFiveButtonStyles = css`
  background-color: #36bb50;
  color: black;
  text-shadow: none;
`;

const getButtonStyles = (props) => {
  if (props.isGrade1) {
    return isGrade1ButtonStyles;
  } else if (props.isGrade2To4) {
    return isGradeTwoToFourButtonStyles;
  } else if (props.isGrade5) {
    return isGradeFiveButtonStyles;
  } else {
    return buttonStyles;
  }
};

export const Button = styled.button`
  width: 400px;
  height: 75px;
  color: whitesmoke;
  text-shadow: 1px 1px 1px black;
  text-transform: capitalize;
  font-size: 18px;
  font-weight: bolder;
  cursor: pointer;
  background-color: #247afd;
  border-radius: 15px;
  border: 2px solid black;
  transition: all 0.5s ease-in-out;
  outline: none;

  &:hover {
    background-color: #00975f;
    transform: scale(1.05);
    box-shadow: 12px 12px 12px black;

    @media screen and (max-width: 1366px) {
      transform: none;
      transition: none;
      box-shadow: none;
    }
  }

  :active {
    transform: translate(0, 0.5rem);
    box-shadow: 6px 6px 6px black;

    @media screen and (max-width: 1366px) {
      transform: none;
      box-shadow: none;
    }
  }

  &.account-button {
    margin: 20px auto;
  }

  &.forgot-password {
    background-color: yellow;
    color: black;
    text-shadow: none;

    &:hover {
      background-color: yellow;
      color: black;
      text-shadow: none;
      transform: scale(1.05);
      box-shadow: 12px 12px 12px black;

      @media screen and (max-width: 1366px) {
        transform: none;
        transition: none;
        box-shadow: none;
      }
    }
  }

  @media screen and (max-width: 600px) {
    width: 300px;
  }

  @media screen and (max-width: 450px) {
    width: 250px;
    height: 65px;
  }

  @media screen and (max-width: 320px) {
    font-size: 16px;
    width: 200px;
    height: 60px;
  }
`;

export const PortalButton = styled(Button)`
  background-color: #fe46a5;
  color: black;
  text-shadow: none;
  margin: 30px;

  @media screen and (max-width: 450px) {
    margin-top: 20px;
  }
`;

export const DvsaButton = styled(Button)`
  background-color: #016c56;
  animation: 1s ${zoomInLeftAnimation};
  margin: 0px auto 20px auto;

  &:hover {
    background-color: #016c56;
  }
`;

export const HighwayCodeButton = styled(Button)`
  background-color: #1f6fb8;
  margin: 0px auto 20px auto;
  animation: 1s ${zoomInRightAnimation};

  &:hover {
    background-color: #1f6fb8;
  }
`;

export const GovUkButton = styled(Button)`
  background-color: blue;
  margin: 0px auto 20px auto;
  animation: 1s ${zoomInLeftAnimation};

  &:hover {
    background-color: blue;
  }
`;

export const DvlaButton = styled(Button)`
  background-color: #ff0c81;
  margin: 0px auto 20px auto;
  animation: 1s ${zoomInRightAnimation};

  &:hover {
    background-color: #ff0c81;
  }
`;

export const TermsReadButton = styled(Button)`
  font-size: 16px;
`;

export const EmailSelfButton = styled(Button)`
  margin: 20px;
  background-color: whitesmoke;
  color: black;
  text-shadow: none;

  &.pupil-progress {
    background-color: #247afd;
    color: whitesmoke;
    text-shadow: 1px 1px 1px black;
  }

  &.instructor-pupil-progress {
    background-color: yellow;
  }
`;

export const EmailPupilButton = styled(EmailSelfButton)`
  background-color: #df95f6;
`;

export const AddButton = styled.button`
  width: 70px;
  height: 70px;
  position: fixed;
  right: 30px;
  top: 110px;
  background-color: transparent;
  border: none;
  z-index: 10;
  outline: none;
  cursor: pointer;
  animation: infinite 1s ${PulseAnimation};

  @media screen and (max-width: 850px) {
    right: 20px;
  }

  @media screen and (max-width: 600px) {
    right: -10px;
  }

  @media screen and (max-width: 450px) {
    right: 5px;
    top: 100px;
  }
`;

export const EditEntryButton = styled(Button)`
  background-color: #ffab0f;
  animation: 1s ${zoomInLeftAnimation};
  margin: 10px;
  color: black;
  text-shadow: none;

  &:hover {
    background-color: #ffab0f;
  }

  @media screen and (max-width: 850px) {
    font-size: 16px;
  }
`;

export const RemoveEntryButton = styled(Button)`
  background-color: red;
  animation: 1s ${zoomInRightAnimation};
  margin: 10px;
  color: black;
  text-shadow: none;

  &:hover {
    background-color: red;
  }

  @media screen and (max-width: 850px) {
    font-size: 16px;
  }
`;

export const ReturnToTableButton = styled(Button)`
  background-color: #247afd;
  animation: 1s ${zoomInLeftAnimation};
  margin: 10px;
  color: black;
  text-shadow: none;

  &:hover {
    background-color: #247afd;
  }

  @media screen and (max-width: 850px) {
    font-size: 16px;
  }
`;

export const SaveButton = styled.button`
  width: 70px;
  height: 70px;
  position: fixed;
  right: 30px;
  top: 50px;
  background-color: #00ff0c;
  color: black;
  border: 2px solid black;
  border-radius: 50px;
  font-weight: bold;
  z-index: 10;
  outline: none;
  cursor: pointer;
  animation: infinite 1s ${PulseAnimation};

  @media screen and (max-width: 850px) {
    right: 20px;
  }

  @media screen and (max-width: 600px) {
    right: 10px;
    width: 50px;
    height: 50px;
  }

  @media screen and (max-width: 450px) {
    font-size: 10px;
  }

  @media screen and (max-width: 320px) {
    width: 40px;
    height: 40px;
  }
`;

export const ReturnButton = styled.button`
  width: 70px;
  height: 70px;
  position: fixed;
  right: 30px;
  top: 170px;
  background-color: red;
  border: 2px solid black;
  border-radius: 50px;
  color: whitesmoke;
  font-weight: bold;
  z-index: 10;
  outline: none;
  cursor: pointer;
  animation: infinite 1s ${PulseAnimation};
  text-align: center;

  @media screen and (max-width: 850px) {
    right: 20px;
  }

  @media screen and (max-width: 600px) {
    right: 10px;
    top: 130px;
    width: 50px;
    height: 50px;
  }

  @media screen and (max-width: 450px) {
    font-size: 10px;
  }

  @media screen and (max-width: 320px) {
    width: 40px;
    height: 40px;
    top: 170px;
  }
`;

export const PageButton = styled(Button)`
  min-width: unset;
  width: 50px;
  height: 10px;
  margin: 0px 10px;
  line-height: 0px;
  font-size: 16px;
  text-shadow: none;
  padding: 10px 5px;
  background-color: #ffab0f;
  color: black;

  @media screen and (max-width: 1024px) {
    margin: 0px 5px;
  }

  @media screen and (max-width: 1024px) {
    width: 40px;
  }
`;

export const ChoosePaymentMethodButton = styled(Button)`
  background-color: #fe46a5;
  text-shadow: none;
  color: black;

  &:hover {
    background-color: yellow;
  }
`;

export const FeaturesButton = styled(Button)`
  margin-top: 20px;
  animation: 2s ${slideInLeftAnimation};
`;

export const SignUpLinkButton = styled(Button)`
  animation: 2s ${slideInRightAnimation};
`;

export const ContactFormButton = styled(Button)`
  margin-bottom: 50px;

  @media screen and (max-width: 850px) {
    margin-top: 25px;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 600px) {
    font-size: 18px;
  }

  @media screen and (max-width: 450px) {
    height: 75px;
  }
`;

export const DisabledContactButton = styled(ContactFormButton)`
  cursor: not-allowed;
  opacity: 0.5;
  pointer-events: none;
`;

export const ErrorBoundaryReloadPageButton = styled(Button)`
  background-color: yellow;
`;

export const InstructionsButton = styled.button`
  background-color: #247afc;
  border: 2px solid black;
  margin: 0px 5px;
  border-radius: 10px;
  cursor: pointer;
  text-align: center;
  width: 260px;
  height: 50px;
  outline: none;
  font-weight: bold;
  transition: all 0.5s ease-in-out;
  font-family: inherit;
  text-transform: capitalize;
  color: whitesmoke;
  text-shadow: 0.5px 0.5px 0.5px black;
  font-size: 18px;

  &:active {
    transform: translate(0, 0.3rem);

    @media screen and (max-width: 1366px) {
      transform: none;
    }
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: 6px 6px 6px black;

    @media screen and (max-width: 1366px) {
      transform: none;
      transition: none;
      box-shadow: none;
    }
  }

  @media screen and (max-width: 850px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px auto;
  }

  @media screen and (max-width: 280px) {
    width: 200px;
  }
`;

export const CloseInstructionsButton = styled(InstructionsButton)`
  background-color: yellow;
  color: black;
  text-shadow: none;
`;

export const SignInButton = styled(Button)`
  margin: 30px auto 0px auto;
  height: 75px;

  @media screen and (max-width: 600px) {
    margin: 25px auto 0px auto;
  }

  @media screen and (max-width: 450px) {
    height: 50px;
  }

  @media screen and (max-width: 280px) {
    width: 150px;
  }
`;

export const DisabledSignInButton = styled(SignInButton)`
  box-shadow: none;
  cursor: not-allowed;
  opacity: 0.5;
  pointer-events: none;
`;

export const SignUpButton = styled(Button)`
  margin: 50px auto 50px auto;
  background-color: #2099ef;
  height: 75px;

  &:hover {
    background-color: whitesmoke;

    @media screen and (max-width: 1366px) {
      background-color: #2099ef;
    }
  }

  @media screen and (max-width: 450px) {
    height: 50px;
  }
`;

export const ForgotPasswordButton = styled(Button)`
  background-color: red;
  color: whitesmoke;
  text-shadow: 1px 1px 1px black;
  margin: 0 auto;

  &:hover {
    background-color: red;
  }
`;

export const InfoButton = styled(SearchInfoSVG)`
  margin: 10px 0px 10px 0px;
  width: 35px;
  height: 35px;
  border: 2px solid black;
  border-radius: 50px;
  animation: infinite 1s ${PulseAnimation};

  &.combined {
    animation: 1s ${slideInLeftAnimation};
  }

  &:hover {
    cursor: pointer;
  }
`;

export const ClearAndReloadButton = styled.button`
  border-radius: 10px;
  border: 2px solid black;
  margin-top: 20px;
  width: 50%;
  height: 40px;
  font-size: 18px;
  background-color: lightgray;
  cursor: pointer;
  animation: 1s ${zoomInRightAnimation};
  outline: none;
  color: black;
  text-transform: capitalize;
  font-family: inherit;

  :active {
    transform: translate(0, 0.5rem);
    box-shadow: 6px 6px 6px black;

    @media screen and (max-width: 1024px) {
      transform: none;
      box-shadow: none;
    }
  }

  @media screen and (max-width: 600px) {
    width: 70%;
  }
  @media screen and (max-width: 450px) {
    width: 90%;
    font-size: 16px;
  }
  @media screen and (max-width: 320px) {
    width: 90%;
    font-size: 14px;
  }
`;

export const PaginationPageButton = styled(Button)`
  min-width: unset;
  width: 50px;
  height: 10px;
  margin: 0px 10px 20px 0px;
  line-height: 0px;
  font-size: 16px;
  text-shadow: none;
  padding: 10px 5px;
  background-color: #0afe76;
  color: black;

  @media screen and (max-width: 1366px) {
    margin: 0px 5px 20px 5px;
  }

  @media screen and (max-width: 1366px) {
    width: 40px;
  }
`;

export const ClearSearchButton = styled.button`
  position: absolute;
  top: 0;
  border-radius: 5px;
  right: 0px;
  z-index: 2;
  border: none;
  height: 50px;
  width: 5%;
  cursor: pointer;
  color: whitesmoke;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border: 1px solid black;
  background-color: red;
  transform: translateX(2px);
  text-transform: capitalize;
  font-family: inherit;
  color: black;
  font-weight: 700;
  animation: 1s ${bounceInDownAnimation};

  @media screen and (max-width: 1366px) {
    width: 10%;
  }

  @media screen and (max-width: 450px) {
    height: 40px;
  }
`;

export const MoneyOptionsIncomeButton = styled(Button)`
  margin: 15px auto;
  animation: 1s ${zoomInLeftAnimation};
  background-color: #ff0e80;
`;

export const MoneyOptionsBlockBookingsButton = styled(Button)`
  margin: 15px auto;
  animation: 1s ${zoomInRightAnimation};
  background-color: red;
`;

export const MoneyOptionsExpensesButton = styled(Button)`
  margin: 15px auto;
  animation: 1s ${zoomInRightAnimation};
  background-color: #0802ff;
`;

export const MoneyOptionsExpensesWeekButton = styled(Button)`
  margin: 15px auto;
  animation: 1s ${zoomInRightAnimation};
  background-color: whitesmoke;
  color: black;
  text-shadow: none;
`;

export const MoneyOptionsExpensesMonthButton = styled(Button)`
  margin: 15px auto;
  animation: 1s ${zoomInLeftAnimation};
  background-color: yellow;
  color: black;
  text-shadow: none;
`;

export const MoneyOptionsExpensesYearButton = styled(Button)`
  margin: 15px auto;
  animation: 1s ${zoomInRightAnimation};
  background-color: #00985f;
  color: black;
  text-shadow: none;
`;

export const PupilOptionsPupilButton = styled(Button)`
  margin: 15px auto;
  animation: 1s ${zoomInLeftAnimation};
  background-color: #ff00e1;
  color: black;
  text-shadow: none;
`;

export const PupilOptionsBlockBookingButton = styled(Button)`
  margin: 15px auto;
  animation: 1s ${zoomInRightAnimation};
  background-color: #00ff2a;
  color: black;
  text-shadow: none;
`;
export const PupilOptionsProgressButton = styled(Button)`
  margin: 15px auto;
  animation: 1s ${zoomInLeftAnimation};
  background-color: #00e5ff;
  color: black;
  text-shadow: none;
`;

export const PayButton = styled(Button)`
  min-width: 165px;
  width: 400px;
  height: 70px;
  letter-spacing: 0.5px;
  line-height: 35px;
  padding: 15px 15px;
  font-size: 22px;
  background-color: yellow;
  color: black;
  text-transform: capitalize;
  cursor: pointer;
  border-radius: 15px;
  border: 1px solid black;
  outline: none;
  text-shadow: none;
  display: flex;
  justify-content: center;
  transition: none;
  margin: 0 auto;
  font-weight: bolder;

  :active {
    transform: translate(0, 0.5rem);
  }

  &:hover {
    transform: none;
    background-color: #0eeb1e;
    color: black;

    @media screen and (max-width: 1366px) {
      box-shadow: none;
    }
  }

  @media screen and (max-width: 450px) {
    width: 85%;
  }

  @media screen and (max-width: 360px) {
    font-size: 15px;
  }
`;

export const DisabledButton = styled(PayButton)`
  box-shadow: none;
  cursor: not-allowed;
  opacity: 0.5;
  pointer-events: none;
`;

export const BackButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  position: fixed;
  left: 10px;
  bottom: 22px;
  background-color: black;
  border: 2px solid whitesmoke;
  color: whitesmoke;
  z-index: 10;
  outline: none;
  cursor: pointer;

  @media screen and (max-width: 1366px) {
    height: 80px;
    width: 80px;
  }

  @media screen and (max-width: 768px) {
    height: 60px;
    width: 60px;
  }
`;

export const SubjectButtonElement = styled.button`
  min-width: 165px;
  width: 60%;
  height: 70px;
  line-height: 5px;
  padding: 25px 25px;
  font-size: 16px;
  font-weight: bolder;
  text-shadow: 1px 1px 1px black;
  color: whitesmoke;
  text-transform: capitalize;
  cursor: pointer;
  border-radius: 15px;
  border: 2px solid black;
  transition: all 0.5s ease-in-out;
  outline: none;

  ${getButtonStyles}

  @media screen and (max-width: 800px) {
    width: 70%;
    padding: 5px 5px;
  }

  @media screen and (max-width: 600px) {
    width: 95%;
  }

  @media screen and (max-width: 280px) {
    font-size: 14px;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: 12px 12px 12px black;

    @media screen and (max-width: 1024px) {
      transform: none;
      box-shadow: none;
    }
  }

  :active {
    transform: translate(0, 0.5rem);
    box-shadow: 6px 6px 6px black;

    @media screen and (max-width: 1024px) {
      transform: none;
      box-shadow: none;
    }
  }
`;
