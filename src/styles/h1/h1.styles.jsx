import styled from "styled-components";

export const Heading = styled.h1`
  font-size: 35px;
  text-decoration: underline;
  text-shadow: none;
  word-wrap: break-word;

  @media screen and (max-width: 1024px) {
    padding: 0px 20px;
  }

  @media screen and (max-width: 450px) {
    font-size: 30px;
  }

  @media screen and (max-width: 360px) {
    font-size: 25px;
  }
`;

export const CompatibleWith = styled(Heading) ` 
  text-decoration:none;
`;

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
