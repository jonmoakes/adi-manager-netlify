import styled from "styled-components";

export const BlackHr = styled.hr`
  border-color: black;
  width: 90%;
`;

export const SignInUpHr = styled.hr`
  border-color: black;
  width: 90%;
  margin-bottom: 20px;
`;

export const PwaTopHr = styled.hr`
  /* border-color: #b9d1e5; */
`;

export const PwaBottomHr = styled(PwaTopHr)`
  margin-top: 30px;

  @media screen and (max-width: 450px) {
    margin-top: 20px;
  }
`;
