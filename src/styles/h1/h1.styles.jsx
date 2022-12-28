import styled from "styled-components";

export const Heading = styled.h1`
  font-size: 35px;
  text-decoration: underline;
  text-shadow: none;
  word-wrap: break-word;

  @media screen and (max-width: 1366px) {
    padding: 0px 20px;
  }

  @media screen and (max-width: 450px) {
    font-size: 30px;
  }

  @media screen and (max-width: 360px) {
    font-size: 25px;
  }

  @media screen and (max-width: 320px) {
    font-size: 20px;
  }
`;

export const CompatibleWith = styled(Heading)`
  text-decoration: none;
`;
