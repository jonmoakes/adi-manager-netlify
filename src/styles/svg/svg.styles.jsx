import styled from "styled-components";

import { ReactComponent as SignUpSVG } from "../../assets/header/sign-up.svg";
import { ReactComponent as LoginSVG } from "../../assets/header/login.svg";
import { ReactComponent as LinksSVG } from "../../assets/toolbar/link.svg";
import { ReactComponent as AccountSVG } from "../../assets/toolbar/account-icon.svg";
import { ReactComponent as LogoutSVG } from "../../assets/toolbar/logout.svg";
import { ReactComponent as PricingSVG } from "../../assets/toolbar/bank-card-icon.svg";
import { ReactComponent as ContactSVG } from "../../assets/toolbar/message-icon.svg";
import { ReactComponent as FeaturesSVG } from "../../assets/toolbar/features-icon.svg";


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

  @media screen and (max-width: 1024px) {
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

    @media screen and (max-width: 1024px) {
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

  @media screen and (max-width: 1024px) {
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


