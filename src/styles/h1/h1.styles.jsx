import styled from "styled-components";

export const Title = styled.h1`
  color: whitesmoke;
  text-decoration: underline;
`;

export const HomePageAppName = styled.h1`
  color: #b9d1e5;
  font-size: 90px;

  @media screen and (max-width: 850px) {
    font-size: 70px;
  }

  @media screen and (max-width: 600px) {
    font-size: 50px;
  }

  @media screen and (max-width: 450px) {
    font-size: 45px;
    padding: 0px 10px;
  }
`;
