import styled from "styled-components";

export const StyledImage = styled.img`
  width: 95%;
  height: auto;
  border-radius: 15px;

  &.loading {
    filter: blur(10px);
    clip-path: inset(0);
  }
  &.loaded {
    filter: blur(0px);
    transition: filter 0.5s linear;
    border: 2px solid black;
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
