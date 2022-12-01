import styled, { keyframes } from "styled-components";
import { pulse } from "react-animations";

import { ReactComponent as SignUpSVG } from "../../assets/header/sign-up.svg";
import { ReactComponent as LoginSVG } from "../../assets/header/login.svg";
import { ReactComponent as LinksSVG } from "../../assets/toolbar/link.svg";
import { ReactComponent as AccountSVG } from "../../assets/toolbar/account-icon.svg";
import { ReactComponent as LogoutSVG } from "../../assets/toolbar/logout.svg";
import { ReactComponent as PricingSVG } from "../../assets/toolbar/bank-card-icon.svg";
import { ReactComponent as ContactSVG } from "../../assets/toolbar/message-icon.svg";
import { ReactComponent as FeaturesSVG } from "../../assets/toolbar/features-icon.svg";
import { ReactComponent as StripeSVG } from "../../assets/stripe-logo.svg";
import { ReactComponent as DiarySVG } from "../../assets/header/diary-icon.svg";
import { ReactComponent as LessonsSVG } from "../../assets/header/hands.svg";
import { ReactComponent as ExpensesSVG } from "../../assets/header/pound.svg";
import { ReactComponent as PupilsSVG } from "../../assets/header/pupils-icon.svg";
import { ReactComponent as LoaderSVG } from "../../assets/tl.svg";
import { ReactComponent as PhoneIconSVG } from "../../assets/phone.svg";
import { ReactComponent as TextIconSVG } from "../../assets/text-icon.svg";
import { ReactComponent as EmailIconSVG } from "../../assets/toolbar/message-icon.svg";

import { ReactComponent as StarSVG } from "../../assets/star.svg";

const PulseAnimation = keyframes`${pulse}`;

export const LoginIcon = styled(LoginSVG)`
  width: 38px;
  height: 38px;
  margin-top: 20px;

  @media screen and (max-width: 320px) {
    height: 30px;
    width: 30px;
    margin-top: 25px;
  }
`;

export const SignUpIcon = styled(SignUpSVG)`
  width: 40px;
  height: 40px;
  margin-top: 18px;

  @media screen and (max-width: 320px) {
    height: 30px;
    width: 30px;
    margin-top: 26px;
  }
`;

export const LoggedInContactIcon = styled(ContactSVG)`
  width: 40px;
  height: 40px;
  margin-top: 15px;

  @media screen and (max-width: 1366px) {
    margin-top: 17px;
  }

  @media screen and (max-width: 450px) {
    height: 35px;
    width: 35px;
    margin-top: 13px;
  }

  @media screen and (max-width: 320px) {
    height: 30px;
    width: 30px;
    margin-top: 18px;
  }
`;

export const LinksIcon = styled(LinksSVG)`
  width: 40px;
  height: 40px;
  margin-top: 18px;

  @media screen and (max-width: 450px) {
    height: 35px;
    width: 35px;
    margin-top: 13px;
  }

  @media screen and (max-width: 320px) {
    height: 30px;
    width: 30px;
    margin-top: 18px;
  }
`;

export const AccountIcon = styled(AccountSVG)`
  width: 40px;
  height: 40px;
  margin-top: 18px;

  &.about-icon {
    margin-top: 15px;

    @media screen and (max-width: 1366px) {
      margin-top: 16px;
    }

    @media screen and (max-width: 320px) {
      height: 30px;
      width: 30px;
      margin-top: 21px;
    }
  }

  @media screen and (max-width: 450px) {
    height: 35px;
    width: 35px;
    margin-top: 14px;
  }

  @media screen and (max-width: 320px) {
    height: 30px;
    width: 30px;
    margin-top: 18px;
  }
`;

export const LogoutIcon = styled(LogoutSVG)`
  width: 40px;
  height: 40px;
  margin-top: 15px;

  @media screen and (max-width: 1366px) {
    margin-top: 16px;
  }

  @media screen and (max-width: 450px) {
    height: 35px;
    width: 35px;
    margin-top: 14px;
  }

  @media screen and (max-width: 320px) {
    height: 30px;
    width: 30px;
    margin-top: 18px;
  }
`;

export const FeaturesIcon = styled(FeaturesSVG)`
  width: 40px;
  height: 40px;
  margin-top: 15px;

  @media screen and (max-width: 450px) {
    margin-top: 25px;
    height: 38px;
    width: 38px;
  }

  @media screen and (max-width: 450px) {
    margin-top: 15px;
  }

  @media screen and (max-width: 320px) {
    height: 30px;
    width: 30px;
    margin-top: 21px;
  }
`;

export const PricingIcon = styled(PricingSVG)`
  width: 40px;
  height: 40px;
  margin-top: 15px;

  @media screen and (max-width: 450px) {
    margin-top: 10px;
  }

  @media screen and (max-width: 320px) {
    height: 30px;
    width: 30px;
    margin-top: 20px;
  }
`;

export const LoggedOutContactIcon = styled(ContactSVG)`
  width: 40px;
  height: 40px;
  margin-top: 15px;

  @media screen and (max-width: 450px) {
    margin-top: 15px;
    height: 38px;
    width: 38px;
  }

  @media screen and (max-width: 320px) {
    height: 31px;
    width: 31px;
    margin-top: 21px;
  }
`;

export const Stripe = styled(StripeSVG)`
  width: 300px;
  height: auto;

  transition: all 0.5s ease-in-out;

  &:hover {
    transform: scale(1.1);

    @media screen and (max-width: 1366px) {
      transition: none;
      transform: none;
    }
  }

  @media screen and (max-width: 600px) {
    width: 200px;
  }

  @media screen and (max-width: 280px) {
    width: 150px;
  }
`;

export const DiaryIcon = styled(DiarySVG)`
  width: 35px;
  height: 35px;
  margin-top: 20px;

  @media screen and (max-width: 320px) {
    height: 25px;
    width: 25px;
    margin-top: 25px;
  }

  @media screen and (max-width: 280px) {
    margin-top: 28px;
  }
`;

export const DiaryIconText = styled.p`
  text-align: center;
  font-size: 10px;
  width: 35px;
  color: black;
  margin-top: -2px;

  @media screen and (max-width: 1024px) {
    margin-top: -4px;
  }

  @media screen and (max-width: 450px) {
    margin-top: -3px;
  }

  @media screen and (max-width: 280px) {
    width: 25px;
    font-size: 8px;
  }
`;

export const LessonsIcon = styled(LessonsSVG)`
  width: 40px;
  height: 40px;
  margin-top: 18px;

  @media screen and (max-width: 320px) {
    height: 30px;
    width: 30px;
    margin-top: 23px;
  }

  @media screen and (max-width: 280px) {
    margin-top: 25px;
  }
`;

export const LessonsIconText = styled.p`
  text-align: center;
  font-size: 10px;
  width: 40px;
  color: black;
  margin-top: -5px;

  @media screen and (max-width: 1024px) {
    margin-top: -7px;
  }

  @media screen and (max-width: 768px) {
    margin-top: -6px;
  }

  @media screen and (max-width: 450px) {
    margin-top: -5.5px;
  }

  @media screen and (max-width: 280px) {
    width: 25px;
    font-size: 8px;
    margin-top: -4.5px;
  }
`;

export const ExpensesIcon = styled(ExpensesSVG)`
  width: 38px;
  height: 38px;
  margin-top: 20px;

  @media screen and (max-width: 320px) {
    height: 30px;
    width: 30px;
    margin-top: 25px;
  }

  @media screen and (max-width: 280px) {
    margin-top: 26px;
  }
`;

export const ExpensesIconText = styled.p`
  text-align: center;
  font-size: 10px;
  width: 40px;
  margin-top: -5px;
  color: black;

  @media screen and (max-width: 1024px) {
    margin-top: -6.5px;
  }

  @media screen and (max-width: 768px) {
    margin-top: -5.5px;
  }

  @media screen and (max-width: 320px) {
    margin-top: -6px;
    width: 25px;
  }

  @media screen and (max-width: 280px) {
    font-size: 8px;
    margin-top: -4.5px;
  }
`;

export const PupilsIcon = styled(PupilsSVG)`
  width: 40px;
  height: 40px;
  margin-top: 18px;

  @media screen and (max-width: 320px) {
    height: 30px;
    width: 30px;
    margin-top: 25px;
  }

  @media screen and (max-width: 280px) {
    margin-top: 26px;
  }
`;

export const PupilsIconText = styled.p`
  text-align: center;
  font-size: 10px;
  width: 40px;
  color: black;
  margin-top: -5px;

  @media screen and (max-width: 1024px) {
    margin-top: -6.5px;
  }

  @media screen and (max-width: 768px) {
    margin-top: -5.5px;
  }

  @media screen and (max-width: 320px) {
    margin-top: -5.5px;
    width: 25px;
  }

  @media screen and (max-width: 280px) {
    font-size: 8px;
    margin-top: -4px;
  }
`;

export const LoaderIcon = styled(LoaderSVG)`
  position: fixed;
  top: 50%;
  left: 50%;
  /* below makes the image in the centre not the top left in the center */
  transform: translate(-50%, -50%);
  height: 30%;
  width: 30%;
`;

export const PhoneIcon = styled(PhoneIconSVG)`
  height: 50px;
  width: 50px;
  margin-top: 15px;
  border-radius: 50px;
  border: 2px solid black;
  transition: all 0.5s ease-in-out;
  background-color: #247afd;
  animation: infinite 1s ${PulseAnimation};
`;

export const TextIcon = styled(TextIconSVG)`
  height: 50px;
  width: 50px;
  margin-top: 15px;
  border-radius: 50px;
  border: 2px solid black;
  transition: all 0.5s ease-in-out;
  background-color: lightgray;
  animation: infinite 1s ${PulseAnimation};
`;

export const EmailIcon = styled(EmailIconSVG)`
  height: 50px;
  width: 50px;
  margin-top: 15px;
  border-radius: 50px;
  border: 2px solid black;
  transition: all 0.5s ease-in-out;
  background-color: lightgray;
  animation: infinite 1s ${PulseAnimation};
`;

export const StarIcon = styled(StarSVG)`
  width: 35px;
  height: 35px;
`;
