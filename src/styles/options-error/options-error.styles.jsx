import styled, { keyframes } from "styled-components";
import { bounceInDown } from "react-animations";

const bounceInDownAnimation = keyframes`${bounceInDown}`;

export const Div = styled.div`
  animation: 1s ${bounceInDownAnimation};
  background-color: salmon;
  padding: 0px 5px;
  border-radius: 15px;
  width: 50%;
  height: auto;

  p {
    color: black;
    text-shadow: none;

    @media screen and (max-width: 600px) {
      font-size: 16px;
    }
  }

  li {
    color: black;
    text-shadow: none;

    @media screen and (max-width: 600px) {
      font-size: 16px;
    }
  }

  @media screen and (max-width: 1377px) {
    width: 60%;
  }

  @media screen and (max-width: 850px) {
    width: 70%;
  }

  @media screen and (max-width: 600px) {
    width: 90%;
  }
`;
