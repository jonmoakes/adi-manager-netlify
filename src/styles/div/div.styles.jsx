import styled, { keyframes } from "styled-components";
import {
  bounceInDown,
  slideInLeft,
  slideInRight,
  rotateInUpRight,
  fadeInLeftBig,
} from "react-animations";

const slideInLeftAnimation = keyframes`${slideInLeft}`;
const slideInRightAnimation = keyframes`${slideInRight}`;
const bounceInDownAnimation = keyframes`${bounceInDown}`;
const rotateInUpRightAnimation = keyframes`${rotateInUpRight}`;
const fadeInLeftBigAnimation = keyframes`${fadeInLeftBig}`;

export const Div = styled.div`
  margin: 0px auto 75px auto;
  background-color: #ffab0f;
  width: 50%;
  border-radius: 15px;
  padding: 20px 20px 20px 20px;
  box-shadow: 10px 10px 10px black;
  border: 2px solid black;

  @media screen and (max-width: 1024px) {
    box-shadow: none;
    width: 70%;
  }

  @media screen and (max-width: 600px) {
    margin: 0px auto 50px auto;
  }

  @media screen and (max-width: 450px) {
    width: 85%;
    padding: 20px 10px 20px 10px;
  }
`;

export const LoginDiv = styled.div`
  margin: 0px auto 75px auto;
  background-color: #ffab0f;
  width: 50%;
  border-radius: 15px;
  padding: 20px 20px 50px 20px;
  box-shadow: 10px 10px 10px black;
  border: 2px solid black;

  @media screen and (max-width: 1024px) {
    box-shadow: none;
    width: 70%;
  }

  @media screen and (max-width: 600px) {
    margin: 0px auto 50px auto;
  }

  @media screen and (max-width: 450px) {
    width: 85%;
    padding: 20px 10px 50px 10px;
  }
`;

export const FooterDiv = styled.div`
  margin: -100px auto 150px auto;
  background-color: #ffab0f;
  width: 50%;
  border-radius: 15px;
  padding: 20px 20px 20px 20px;
  box-shadow: 10px 10px 10px black;
  border: 2px solid black;

  @media screen and (max-width: 1024px) {
    box-shadow: none;
    width: 70%;
  }

  @media screen and (max-width: 600px) {
    margin: -50px auto 150px auto;
  }

  @media screen and (max-width: 450px) {
    width: 85%;
    padding: 20px 10px 20px 10px;
  }
`;

export const SlideInDiv = styled.div`
  animation: 2s ${slideInLeftAnimation};
`;

export const FeaturesDiv = styled(Div)`
  &.features {
    animation: 2s ${slideInLeftAnimation};
  }
  &.sign-in {
    animation: 2s ${slideInRightAnimation};
  }

  @media screen and (max-width: 450px) {
    padding: 20px 5px 20px 10px;
  }
`;

export const NoSearchResultDiv = styled.div`
  width: 50%;
  height: auto;
  margin: 50px auto;
  background-color: #b9d1e5;
  padding: 20px;
  border-radius: 15px;
  animation: 1s ${bounceInDownAnimation};

  @media screen and (max-width: 600px) {
    width: 80%;
  }
`;

export const ErrorDiv = styled.div`
  background-color: #d62424;
  border: 2px solid black;
  width: 80%;
  margin: 0 auto;
  height: auto;
  padding: 0px 10px;
  border-radius: 15px;
`;

export const BounceInDiv = styled.div`
  animation: 1s ${bounceInDownAnimation};
`;

export const WarningDiv = styled(ErrorDiv)`
  background-color: #3085d6;
`;

export const TableErrorDiv = styled(ErrorDiv)`
  width: 70%;
  border: 2px solid black;
  margin: 40px auto;

  ul {
    margin-top: 20px;
  }

  li {
    color: black;
    text-shadow: none;
  }

  @media screen and (max-width: 1366px) {
    width: 90%;
  }

  @media screen and (max-width: 450px) {
    padding: 5px;
  }
`;

export const OrdersTableOrderChoiceDiv = styled.div`
  animation: 1s ${bounceInDownAnimation};
  padding: 10px;
  border-radius: 15px;
  margin: 20px auto 0px auto;
  width: 50%;
  background-color: transparent;
  border: none;

  @media screen and (max-width: 850px) {
    width: 90%;
    margin: 20px auto -20px auto;
  }
`;

export const TableOrderChoiceOpen = styled(OrdersTableOrderChoiceDiv)`
  margin: 50px auto 20px auto;
  width: 50%;
  background-color: #b9d1e5;

  @media screen and (max-width: 1366px) {
    width: 90%;
  }

  @media screen and (max-width: 850px) {
    margin: 50px auto 0px auto;
  }
`;

export const AmountDiv = styled.div`
  width: 50%;
  animation: 1s ${bounceInDownAnimation};
  margin: 30px auto 0px auto;
  padding: 20px 10px 40px 10px;
  background-color: #b9d1e5;
  border: 2px solid black;
  border-radius: 15px;

  @media screen and (max-width: 1366px) {
    width: 70%;
  }

  @media screen and (max-width: 600px) {
    width: 90%;
  }
`;

export const TableContainer = styled.div`
  width: 90%;
  animation: 1.5s ${bounceInDownAnimation};
  margin: 50px auto;
  height: auto;
  border-radius: 15px;
  padding: 0px 20px 0px 20px;

  @media screen and (max-width: 450px) {
    width: 85%;
    padding: 0px 10px 0px 10px;
  }
`;

export const TableDiv = styled.div`
  margin: 0px auto 100px auto;
  width: 100%;
  background-color: black;
  height: auto;

  @media screen and (max-width: 1366px) {
    width: 95%;
    overflow: auto;
    border: 4px solid black;
    box-shadow: none;
  }

  @media screen and (max-width: 850px) {
    margin: 30px auto 100px auto;
  }
`;

export const UserOrdersTableDiv = styled.div`
  margin: 25px auto 100px auto;
  width: 100%;
  background-color: black;
  height: auto;

  @media screen and (max-width: 1366px) {
    width: 95%;
    overflow: auto;
    border: 4px solid black;
    box-shadow: none;
  }

  @media screen and (max-width: 850px) {
    margin: 30px auto 100px auto;
  }
`;

export const PaginationDiv = styled(Div)`
  margin: -150px auto 0px auto;
  border: none;
  box-shadow: none;
  background-color: #b9d1e5;
  padding-bottom: 50px;

  @media screen and (max-width: 1366px) {
    margin: -50px auto 0px auto;
  }
`;

export const PaginationTextDiv = styled.div`
  margin-bottom: 20px;
`;

export const OrdersTableHelpDiv = styled.div`
  animation: 1s ${bounceInDownAnimation};
  background-color: #b9d1e5;
  padding: 10px;
  border: 2px solid black;
  border-radius: 15px;
  margin: 20px auto 20px auto;
  width: 80%;
`;

export const SearchDiv = styled.div`
  width: 50%;
  position: relative;
  margin: 0 auto;
  animation: 1s ${slideInLeftAnimation};

  @media screen and (max-width: 1366px) {
    width: 70%;
  }

  @media screen and (max-width: 450px) {
    width: 80%;
  }
`;

export const TableSearchDiv = styled(SearchDiv)`
  margin: 40px auto 0px auto;

  @media screen and (max-width: 450px) {
    margin: 25px auto 0px auto;
  }
`;

export const CategoryContainer = styled.div`
  width: 40%;
  margin: 50px auto 50px auto;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  border: 2px solid #b9d1e5;
  background-size: cover;
  background-position: center;
  overflow: hidden;

  &:hover {
    & .background-image {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);

      @media screen and (max-width: 1366px) {
        transform: unset;
        transition: unset;
      }
    }
  }

  @media screen and (max-width: 1366px) {
    width: 70%;
  }

  @media screen and (max-width: 1366px) {
    height: 400px;
  }

  @media screen and (max-width: 450px) {
    width: 90%;
    height: 300px;
  }
`;

export const BackgroundImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  opacity: 0.5;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  border-radius: 15px;
`;

export const Content = styled.div`
  height: 200px;
  width: 20%;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid black;
  border-radius: 15px;
  opacity: 0.85;
  position: absolute;
  background-color: #b9d1e5;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }

  @media screen and (max-width: 950px) {
    width: 35%;
  }

  @media screen and (max-width: 800px) {
    height: 150px;
  }

  @media screen and (max-width: 450px) {
    width: 50%;
  }
`;

export const TitleDiv = styled.div`
  background-color: #b9d1e5;
  width: 30%;
  margin: 50px auto 50px auto;
  border-radius: 15px;
  border: 2px solid black;
  height: 100px;
  padding-top: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: 1s ${slideInLeftAnimation};

  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 1366px) {
    width: 70%;
  }

  @media screen and (max-width: 600px) {
    margin: 25px auto 25px auto;
    height: 70px;
  }
`;

export const ProductItemDiv = styled.div`
  margin: 50px auto 50px auto;
  width: 30%;
  height: auto;
  background-color: #b9d1e5;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 20px 20px 30px 20px;
  animation: 1s ${slideInLeftAnimation};

  @media screen and (max-width: 1366px) {
    width: 50%;
  }

  @media screen and (max-width: 600px) {
    margin: 30px auto 30px auto;
    width: 75%;
  }

  @media screen and (max-width: 450px) {
    padding: 40px 20px 30px 20px;
  }

  @media screen and (max-width: 280px) {
    padding: 40px 10px 50px 10px;
  }
`;

export const PaymentFormDiv = styled.div`
  background-color: #b9d1e5;
  width: 50%;
  margin: 50px auto 0px auto;
  padding: 20px 10px;
  border-radius: 15px;

  @media screen and (max-width: 1366px) {
    width: 90%;
  }
`;

export const InputErrorDiv = styled.div`
  margin-bottom: 30px;
`;

export const CardInputDiv = styled.div`
  background-color: whitesmoke;
  height: 50px;
  width: 90%;
  margin: 30px auto 30px auto;
  padding: 30px 20px 0px 20px;
  border-radius: 15px;
  border: 2px solid black;

  @media screen and (max-width: 1366px) {
    width: 80%;
    padding: 25px 0px 0px 0px;
  }

  @media screen and (max-width: 600px) {
    width: 95%;
  }

  @media screen and (max-width: 450px) {
    height: 40px;
  }
`;

export const HelpDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px auto -20px auto;
  width: 90%;

  @media screen and (max-width: 600px) {
    margin: 0px auto -10px auto;
  }
`;

export const MissingDataDiv = styled.div`
  width: 90%;
  height: auto;
  margin: 0px auto 30px auto;
  background-color: #bc0d0d;
  border: 2px solid black;
  border-radius: 15px;
`;

export const ForgotPasswordSelectDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 50px auto;

  @media screen and (max-width: 600px) {
    width: 90%;
  }
`;

export const MonthlyPriceOptionDiv = styled.div`
  border: 2px solid black;
  border-radius: 15px;
  margin: 20px auto;
  padding: 0px 5px 20px 5px;
  width: 85%;
  background-color: #247afd;
`;

export const YearPriceOptionDiv = styled(MonthlyPriceOptionDiv)`
  background-color: #3ec43e;
`;

export const ConfirmDiv = styled.div`
  width: 70%;
  margin: -10px auto 30px auto;

  p {
    font-size: 14px;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const SmallScreenDiv = styled.div`
  display: none;

  @media screen and (max-width: 850px) {
    display: block;
  }
`;

export const SmallScreenSignUpDiv = styled(SmallScreenDiv)`
  padding-bottom: 50px;
`;

export const PaddedDiv = styled.div`
  padding: 0px 20px;
`;

export const CheckoutPageDiv = styled.div`
  width: 85%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 50px auto 0;
  padding-bottom: 200px;

  @media screen and (max-width: 375px) {
    width: 95%;
  }
`;

export const CheckoutPageHeader = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: space-between;
`;

export const NameHeaderBlock = styled.div`
  width: 30%;
`;

export const QuantityHeaderBlock = styled.div`
  width: 30%;
`;

export const PriceHeaderBlock = styled.div`
  width: 20%;
`;

export const ClearItemHeaderBlock = styled.div`
  width: 20%;
`;

export const TotalPriceDiv = styled.div`
  background-color: #b9d1e5;
  padding: 5px 20px 20px 20px;
  margin-bottom: 10px;
  border-radius: 15px;

  @media screen and (max-width: 450px) {
    margin-top: 20px;
  }
`;

export const InfoDiv = styled.div`
  margin: 50px auto;
  background-color: black;
  padding: 20px;
  border: 2px solid whitesmoke;
  border-radius: 15px;
  width: 50%;
  box-shadow: 6px 6px 6px black;

  @media screen and (max-width: 1366px) {
    width: 100%;
    padding: 20px 10px;
    box-shadow: none;
  }
`;

export const StripeLogoDiv = styled.div`
  margin: 30px auto 0px auto;
  width: 100%;
`;

export const Main = styled.div`
  width: 100%;
  height: 100vh;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const OverlayContent = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0px auto 0px auto;
`;

export const ButtonDiv = styled.div`
  padding-bottom: 100px;
`;

export const PriceWarningDiv = styled.div`
  width: 90%;
  margin: 0 auto;
  animation: 1s ${bounceInDownAnimation};
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 95%;
  position: relative;
  &:before {
    content: "";
    display: block;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    z-index: -10;
    background: ${({ imageUrl }) => `url(${imageUrl}) `} center;
    opacity: 0.4;
  }
`;

export const RequiredDiv = styled.div`
  margin: 10px auto 0px auto;

  @media screen and (max-width: 1366px) {
    margin: 30px auto 10px auto;
  }
  @media screen and (max-width: 850px) {
    margin: 30px auto 0px auto;
  }
`;

export const HelpTextDiv = styled.div`
  background-color: #b9d1e5;
  padding: 10px;
  border: 2px solid black;
  border-radius: 15px;
  margin: 20px auto 20px auto;
  width: 50%;
  animation: 1s ${bounceInDownAnimation};

  @media screen and (max-width: 1366px) {
    width: 80%;
  }
`;

export const CartIconWrapper = styled.div`
  height: 60px;
  transition: all 0.5s ease-in-out;
  cursor: pointer;
  margin-right: 20px;

  &:hover {
    transform: scale(1.2);

    @media screen and (max-width: 1366px) {
      transform: unset;
    }
  }
  @media screen and (max-width: 850px) {
    margin-right: 0px;
  }
`;

export const CartIconDiv = styled.div`
  position: relative;
  top: 0;
  left: 0;
`;

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  padding: 25px 0 10px 0px;
  font-size: 20px;
  align-items: center;
  background-color: #b9d1e5;
  border-radius: 10px;
  margin: 0px auto 50px auto;

  @media screen and (max-width: 1366px) {
    margin: 0px auto 25px auto;
  }
`;

export const CheckoutInfoDiv = styled.div`
  margin-bottom: 10px;
`;

export const ArrowContainer = styled.div`
  width: 30%;
`;

export const ErrorImageOverlay = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #b9d1e5;
`;

export const ErrorImageContainer = styled.div`
  display: inline-block;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-size: cover;
  background-position: center;
  width: 40vh;
  height: 50vh;
  border: 2px solid black;
  border-radius: 10px;
  margin-top: 50px;
`;

export const RelativePositionDiv = styled.div`
  position: relative;
`;

export const InstructionsDiv = styled.div`
  width: 100%;
  height: auto;
  animation: 1s ${bounceInDownAnimation};
  padding: 20px 0px;
  border: 2px solid black;
  border-radius: 15px;
  margin: 20px auto 20px auto;
  background-color: #2099ef;

  @media screen and (max-width: 1024px) {
    padding: 20px 20px;
  }

  @media screen and (max-width: 850px) {
    width: 70%;
  }

  @media screen and (max-width: 450px) {
    padding: 10px 10px;
    width: 90%;
  }
`;

export const PrivacyDiv = styled.div`
  margin: 30px 0px;
`;

export const ImageDiv = styled.div`
  width: auto;
  height: auto;
  margin: 30px auto 0px auto;
`;

export const Nav = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #ffab0f;
  z-index: 3;
  height: 80px;
  border-bottom: 5px solid black;
`;

export const HeaderNavigationItems = styled.div`
  li {
    padding: 0 2rem;
    transition: all 0.5s ease-in-out;

    @media screen and (max-width: 450px) {
      padding: 0 1.2rem;
    }

    @media screen and (max-width: 450px) {
      padding: 0 0rem;
    }

    &:hover {
      transform: scale(1.2);

      @media screen and (max-width: 1024px) {
        transform: unset;
      }
    }
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: flex-end;

    @media screen and (max-width: 450px) {
      justify-content: space-evenly;
    }
  }
`;

export const FooterNavigationItems = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #ffab0f;
  z-index: 3;
  height: 80px;
  border-top: 5px solid black;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-evenly;

    @media screen and (max-width: 450px) {
      justify-content: space-evenly;
    }
  }

  li {
    padding: 0 2rem;
    transition: all 0.5s ease-in-out;

    @media screen and (max-width: 450px) {
      padding: 0 1.2rem;
    }

    @media screen and (max-width: 450px) {
      padding: 0 0rem;
    }

    &:hover {
      transform: scale(1.2);

      @media screen and (max-width: 1024px) {
        transform: unset;
      }
    }
  }
`;

export const RotateDiv = styled(Div)`
  animation: 1s ${rotateInUpRightAnimation};

  span {
    text-shadow: 1px 1px 1px black;
  }
`;

export const LoaderDiv = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 30;
  background-color: black;
  opacity: 0.8;
`;

export const FadeInLeftBigDiv = styled.div`
  animation: 1s ${fadeInLeftBigAnimation};
`;

export const StripeDiv = styled.div`
  margin: 30px auto;
  padding: 15px 10px 10px 10px;
  background-color: whitesmoke;
  width: 50%;
  border-radius: 15px;
  border: 2px solid black;

  @media screen and (max-width: 1024px) {
    width: 80%;
  }
`;

export const CardInputErrorDiv = styled.div`
  background-color: black;
  border-radius: 15px;
  padding: 10px;
  margin-bottom: 40px;
`;
