import styled, { keyframes } from "styled-components";
import { zoomInLeft } from "react-animations";

const zoomInLeftAnimation = keyframes`${zoomInLeft}`;

export const WhitesmokeText = styled.p`
  color: whitesmoke;
`;

export const MoneyOptionsText = styled.p`
  animation: 1s ${zoomInLeftAnimation};
  text-decoration: underline;
  margin: 25px auto 15px auto;
  font-size: 20px;
`;

export const ErrorImageText = styled.p`
  font-size: 18px;
  color: black;
  text-align: center;
  padding: 5px 5px 5px 5px;
`;

export const LoginIconText = styled.p`
  text-align: center;
  font-size: 10px;
  margin-top: -5px;
  color: black;
  width: 38px;

  @media screen and (max-width: 320px) {
    width: 30px;
  }
  @media screen and (max-width: 280px) {
    margin-top: -4px;
  }
`;

export const SignUpIconText = styled.p`
  text-align: center;
  font-size: 10px;
  margin-top: -5.5px;
  color: black;
  width: 40px;

  @media screen and (max-width: 320px) {
    width: 50px;
    margin-top: -5px;
  }
`;

export const LoggedInContactIconText = styled.p`
  font-size: 10px;
  text-align: center;
  width: 40px;
  color: black;
  margin-top: -4px;

  @media screen and (max-width: 450px) {
    margin-top: -3px;
  }
`;

export const LinksIconText = styled.p`
  font-size: 10px;
  text-align: center;
  width: 40px;
  color: black;
  margin-top: -6px;

  @media screen and (max-width: 600px) {
    margin-top: -5px;
  }

  @media screen and (max-width: 450px) {
    margin-top: -3px;
  }
`;

export const AccountIconText = styled.p`
  font-size: 10px;
  text-align: center;
  width: 40px;
  color: black;
  margin-top: -6px;

  &.about {
    margin-top: -2px;

    @media screen and (max-width: 1366px) {
      margin-top: -3px;
    }

    @media screen and (max-width: 600px) {
      margin-top: -4.5px;
    }

    @media screen and (max-width: 450px) {
      margin-top: -2px;
    }

    @media screen and (max-width: 320px) {
      width: 30px;
      margin-top: -4.5px;
    }
  }

  @media screen and (max-width: 450px) {
    margin-top: -4px;
  }

  @media screen and (max-width: 320px) {
    margin-top: -3px;
  }
`;

export const LogoutIconText = styled.p`
  font-size: 10px;
  text-align: center;
  width: 40px;
  color: black;
  margin-top: -6px;

  @media screen and (max-width: 600px) {
    margin-top: -4px;
  }

  @media screen and (max-width: 320px) {
    margin-top: -3px;
  }
`;

export const FeaturesIconText = styled.p`
  text-align: center;
  font-size: 10px;
  margin-top: -4px;
  color: black;
  width: 40px;

  @media screen and (max-width: 450px) {
    margin-top: -5px;
  }

  @media screen and (max-width: 320px) {
    width: 30px;
    margin-top: -5px;
    margin-right: 13px;
  }

  @media screen and (max-width: 280px) {
    margin-top: -4px;
  }
`;

export const PricingIconText = styled.p`
  text-align: center;
  font-size: 10px;
  margin-top: -5px;
  color: black;
  width: 40px;

  @media screen and (max-width: 450px) {
    margin-top: -2.5px;
  }

  @media screen and (max-width: 320px) {
    width: 30px;
    margin-top: -4px;
    margin-right: 6px;
  }

  @media screen and (max-width: 280px) {
    margin-top: -3px;
  }
`;

export const LoggedOutContactIconText = styled.p`
  text-align: center;
  font-size: 10px;
  margin-top: -4px;
  color: black;
  width: 40px;

  @media screen and (max-width: 450px) {
    margin-top: -5px;
  }

  @media screen and (max-width: 320px) {
    width: 31px;
    margin-top: -5px;
    margin-right: 9px;
  }

  @media screen and (max-width: 280px) {
    margin-top: -5px;
  }
`;

export const PaginationText = styled.p`
  font-size: 16px;
`;
