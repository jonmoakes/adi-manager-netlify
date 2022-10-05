import styled from "styled-components";

import { ReactComponent as SignUpSVG } from "../../assets/header/sign-up.svg";
import { ReactComponent as LoginSVG } from "../../assets/header/login.svg";


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



