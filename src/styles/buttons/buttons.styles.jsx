import styled, { keyframes } from "styled-components";
import { slideInLeft, slideInRight, bounceInDown, pulse } from "react-animations";

import { ReactComponent as SearchInfoSVG } from "../../assets/info.svg";

import CustomButton from "../../components/custom-button/custom-button.component";

const slideInLeftAnimation = keyframes`${slideInLeft}`;
const slideInRightAnimation = keyframes`${slideInRight}`;
const bounceInDownAnimation = keyframes`${bounceInDown}`;
const PulseAnimation = keyframes`${pulse}`;

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

    @media screen and (max-width: 1024px) {
      transform: none;
      transition: none;
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

export const TermsReadButton = styled(CustomButton) ` 
  font-size:16px;
`;

export const ChoosePaymentMethodButton = styled(CustomButton) ` 
    background-color: #fe46a5;
    text-shadow:none;
    color:black;

    &:hover {
      background-color: yellow;
    }
`;

export const FeaturesButton = styled(CustomButton)`
  margin-top: 20px;
  animation: 2s ${slideInLeftAnimation};
`;

export const SignUpLinkButton = styled(CustomButton)`
  animation: 2s ${slideInRightAnimation};
`;

export const ContactFormButton = styled(CustomButton)`
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

export const ErrorBoundaryReloadPageButton = styled(CustomButton)`
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
  text-shadow:0.5px 0.5px 0.5px black;
  font-size: 18px;

  &:active {
    transform: translate(0, 0.3rem);

    @media screen and (max-width: 1024px) {
      transform: none;
    }
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: 6px 6px 6px black;

    @media screen and (max-width: 1024px) {
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
  color:black;
  text-shadow:none;
`;

export const SignInButton = styled(CustomButton)`
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

export const SignUpButton = styled(CustomButton)`
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

export const ForgotPasswordButton = styled(CustomButton)`
  background-color: red;
  color: whitesmoke;
  text-shadow: 1px 1px 1px black;
  margin: 0 auto;

  &:hover {
    background-color:red;
  }
`;

export const InfoButton = styled(SearchInfoSVG)`
  margin: 10px 0px 0px 0px;
  width: 35px;
  height: 35px;
  border: 2px solid black;
  border-radius: 50px;
  animation: infinite 1s ${PulseAnimation};

  &:hover {
    cursor: pointer;
  }
`;

export const PaginationPageButton = styled(CustomButton)`
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

  @media screen and (max-width: 1024px) {
    margin: 0px 5px 20px 5px;
  }

  @media screen and (max-width: 1024px) {
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
  border-left: 1px solid black;
  background-color: #b9d1e5;
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

export const PayButton = styled(CustomButton)`
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

