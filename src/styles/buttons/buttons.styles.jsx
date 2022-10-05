import styled, { keyframes } from "styled-components";
import { slideInLeft, bounceInDown, pulse } from "react-animations";
import CustomButton from "../../components/custom-button/custom-button.component";

const slideInLeftAnimation = keyframes`${slideInLeft}`;
const bounceInDownAnimation = keyframes`${bounceInDown}`;
const PulseAnimation = keyframes`${pulse}`;

export const Button = styled.button`
  min-width: 165px;
  width: 400px;
  height: 100px;
  letter-spacing: 0.5px;
  line-height: 50px;
  font-size: 25px;
  background-color: #b9d1e5;
  text-transform: capitalize;
  cursor: pointer;
  border-radius: 15px;
  border: 2px solid black;
  transition: all 0.2s ease-in-out;
  outline: none;
  font-family: inherit;
  font-weight: bold;
  color: black;

  @media screen and (max-width: 1366px) {
    width: 80%;
  }

  @media screen and (max-width: 850px) {
    padding: 5px 5px;
    font-size: 25px;
    line-height: 10px;
  }

  @media screen and (max-width: 600px) {
    height: 50px;
    font-size: 18px;
  }

  &:hover {
    transform: scale(1.05);

    @media screen and (max-width: 1366px) {
      transform: none;
      transition: none;
      box-shadow: none;
    }
  }

  :active {
    transform: translate(0, 0.5rem);
    box-shadow: 0 0.1rem black;
  }
`;

export const OrdersTableHideHelpButton = styled.button`
  height: 50px;
  width: 300px;
  margin: 20px auto;
  border-radius: 10px;
  border: 2px solid black;
  background-color: yellow;
  cursor: pointer;
  text-transform: capitalize;
  color: black;
  font-weight: bold;
  fon-family: inherit;
  font-size: 16px;
  animation: 1s ${slideInLeftAnimation};
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);

    @media screen and (max-width: 1366px) {
      transform: none;
      transition: none;
      box-shadow: none;
    }
  }

  @media screen and (max-width: 600px) {
    width: 80%;
  }
`;

export const HelpButton = styled.button`
  height: 50px;
  width: 300px;
  margin: 0px auto 20px auto;
  border-radius: 10px;
  border: 2px solid black;
  background-color: yellow;
  cursor: pointer;
  text-transform: capitalize;
  color: black;
  font-weight: bold;
  fon-family: inherit;
  font-size: 16px;
  animation: 1s ${slideInLeftAnimation};
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);

    @media screen and (max-width: 1366px) {
      transform: none;
      transition: none;
      box-shadow: none;
    }
  }

  @media screen and (max-width: 600px) {
    width: 80%;
  }
`;

export const UserTableHelpButton = styled(HelpButton)`
  margin: -20px auto 0px auto;
`;

export const ShowAllEntriesButton = styled(HelpButton)`
  background-color: salmon;
  font-family: inherit;
`;

export const ContactFormButton = styled(CustomButton)`
  background-color: yellow;
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
  background-color: #b9d1e5;
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
  color: black;
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
`;

export const ChooseOptionsButton = styled.button`
  width: 50%;
  height: 50px;
  background-color: salmon;
  cursor: pointer;
  border: 2px solid black;
  border-radius: 15px;
  font-family: inherit;
  font-weight: bold;
  color: black;
  font-size: 16px;
  text-transform: capitalize;
  outline: none;
  transition: all 0.2s ease-in-out;

  @media screen and (max-width: 1377px) {
    width: 60%;
  }
  @media screen and (max-width: 850px) {
    width: 70%;
  }

  @media screen and (max-width: 600px) {
    width: 90%;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: 5px 5px 5px black;

    @media screen and (max-width: 1366px) {
      transform: none;
      transition: none;
      box-shadow: none;
    }
  }
`;

export const SignInButton = styled(CustomButton)`
  margin: 30px auto 0px auto;
  background-color: salmon;
  height: 75px;

  &:hover {
    background-color: whitesmoke;

    @media screen and (max-width: 1366px) {
      background-color: salmon;
    }
  }

  @media screen and (max-width: 600px) {
    margin: 25px auto 0px auto;
  }

  @media screen and (max-width: 450px) {
    height: 50px;
  }
`;

export const SignUpButton = styled(CustomButton)`
  margin: 50px auto 50px auto;
  background-color: salmon;
  height: 75px;

  &:hover {
    background-color: whitesmoke;

    @media screen and (max-width: 1366px) {
      background-color: salmon;
    }
  }

  @media screen and (max-width: 450px) {
    height: 50px;
  }
`;

export const GoogleButton = styled(CustomButton)`
  background-color: #fabb02;
  height: 75px;

  &:hover {
    background-color: #e94234;
  }

  @media screen and (max-width: 1366px) {
    width: 100%;
  }

  @media screen and (max-width: 450px) {
    height: 50px;
  }

  @media screen and (max-width: 300px) {
    width: 100%;
  }
`;

export const ForgotPasswordButton = styled(CustomButton)`
  background-color: red;
  color: whitesmoke;
  text-shadow: 1px 1px 1px black;
  margin: 0 auto;

  @media screen and (max-width: 1366px) {
    width: 50%;
  }

  @media screen and (max-width: 600px) {
    width: 60%;
  }
`;

export const ShowTableOrderChoiceButton = styled.button`
  width: 350px;
  font-size: 20px;
  color: black;
  height: auto;
  padding: 10px;
  display: inline;
  margin: 0px auto 0px auto;
  border-radius: 15px;
  border: 2px solid black;
  text-transform: capitalize;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  font-family: inherit;
  font-weight: bold;

  &:hover {
    transform: scale(1.05);
    background-color: whitesmoke;
  }

  @media screen and (max-width: 450px) {
    width: 250px;
    font-size: 16px;
  }

  @media screen and (max-width: 280px) {
    width: 200px;
  }
`;

export const HideTableOrderChoiceButton = styled(ShowTableOrderChoiceButton)`
  width: 250px;
  background-color: yellow;
  margin: 10px auto 10px auto;

  &:hover {
    background-color: yellow;
  }

  @media screen and (max-width: 320px) {
    width: 200px;
  }
`;

export const TableOrderSelectButton = styled.button`
  width: 200px;
  height: auto;
  padding: 10px;
  display: inline;
  margin: 10px;
  border-radius: 15px;
  border: 2px solid black;
  text-transform: capitalize;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  font-family: inherit;
  font-weight: bold;
  color: black;

  &:hover {
    transform: scale(1.05);
    background-color: #0afe76;

    @media screen and (max-width: 1366px) {
      transform: none;
    }
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

export const AddToOrderButtonContainer = styled.button`
  font-family: inherit;
  font-weight: bold;
  background-color: #00ff2a;
  border-radius: 15px;
  width: 90%;
  height: 80px;
  font-size: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  vertical-align: middle;
  outline: none;
  cursor: pointer;
  text-transform: capitalize;
  border: 2px solid black;
  color: black;
  animation: 1s ${bounceInDownAnimation};
  margin: 30px auto;

  &:hover {
    background-color: whitesmoke;

    @media screen and (max-width: 1366px) {
      background-color: #00ff2a;
    }
  }

  :active {
    transform: translate(0, 0.5rem);

    @media screen and (max-width: 1366px) {
      transform: none;
    }
  }

  @media screen and (max-width: 1366px) {
    width: 60%;
  }

  @media screen and (max-width: 850px) {
    width: 70%;
  }

  @media screen and (max-width: 600px) {
    width: 80%;
  }

  @media screen and (max-width: 280px) {
    width: 90%;
    height: 70px;
  }
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

export const AddProductButton = styled.button`
  width: 70px;
  height: 70px;
  position: fixed;
  right: 30px;
  top: 125px;
  background-color: #0afe76;
  color: black;
  border: 2px solid black;
  border-radius: 50px;
  font-weight: bold;
  z-index: 10;
  outline: none;
  cursor: pointer;
  text-transform: capitalize;
  font-family: inherit;
  animation: infinite 1s ${PulseAnimation};
  font-size: 30px;

  @media screen and (max-width: 1366px) {
    right: 13px;
  }

  @media screen and (max-width: 850px) {
    right: 15px;
    top: 115px;
  }

  @media screen and (max-width: 768px) {
    right: 13px;
  }

  @media screen and (max-width: 600px) {
    width: 50px;
    height: 50px;
    top: 110px;
    right: 23px;
    font-size: 20px;
  }

  @media screen and (max-width: 450px) {
    width: 50px;
    height: 50px;
    right: 23px;
  }

  @media screen and (max-width: 280px) {
    right: 10px;
  }
`;

export const AddNewProductButton = styled(CustomButton)`
  background-color: yellow;
  margin-top: 20px;

  @media screen and (max-width: 600px) {
    margin-top: 10px;
  }

  @media screen and (max-width: 450px) {
    margin-bottom: 20px;
  }
`;

export const AccountPageButton = styled(CustomButton)`
  margin: 20px auto;
  background-color: salmon;
`;
