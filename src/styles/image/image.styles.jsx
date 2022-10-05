import styled from "styled-components";

import { Div  } from "../div/div.styles";

export const ImageDiv = styled(Div)`
  background-color: #247afd;
  width: 80%;
  height: auto;
  margin: 50px auto 50px auto;

  @media screen and (max-width: 600px) {
    margin: 0px auto 0px auto;
  }
`;

export const StyledImage = styled.img`
  height: 700px;
  width: 347px;

  &.loading {
    filter: blur(10px);
    clip-path: inset(0);
  }
  &.loaded {
    filter: blur(0px);
    transition: filter 0.5s linear;
  }

  @media screen and (max-width: 820px) {
    height: 500px;
    width: 248px;
  }

  @media screen and (max-width: 450px) {
    height: 400px;
    width: 198px;
  }
`;

export const LogoImage = styled.img`
  margin-top: 1.5px;
  margin-left: 20px;
  height: 75px;
  width: 75px;
  border-radius: 5px;
  float: left;
  border: 1px solid black;

  @media screen and (max-width: 320px) {
    height: 50px;
    width: 50px;
    margin-top: 15px;
    margin-left: 10px;
  }
`;

export const HomePageLogoImage = styled.img`
  height: 250px;
  width: 250px;
  margin-bottom: 20px;
  border-radius: 20px;
  box-shadow: 20px 20px 20px black;
  border: 2px solid black;
  color: whitesmoke;

  @media screen and (max-width: 450px) {
    box-shadow: 5px 5px 5px black;
  }

  @media screen and (max-width: 320px) {
    height: 200px;
    width: 200px;
  }
`;
