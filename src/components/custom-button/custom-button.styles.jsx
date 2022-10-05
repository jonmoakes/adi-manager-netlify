import styled from "styled-components";

export const Button = styled.button`
  width: 400px;
  height: 75px;
  font-size: 18px;
  font-weight: bolder;
  text-shadow: 1px 1px 1px black;
  background-color: #247afd;
  color: whitesmoke;
  text-transform: capitalize;
  cursor: pointer;
  border-radius: 15px;
  border: 2px solid black;
  transition: all 0.5s ease-in-out;
  outline: none;

  &.contact-button {
    margin-top: 30px;
  }

  &.sign-up {
    font-size: 16px;
  }

  &:hover {
    background-color: #00975f;
    transform: scale(1.05);
    box-shadow: 12px 12px 12px black;

    @media screen and (max-width: 1024px) {
      transform: none;
      transition: none;
      box-shadow: none;
    }
  }

  :active {
    transform: translate(0, 0.5rem);
    box-shadow: 6px 6px 6px black;

    @media screen and (max-width: 1024px) {
      transform: none;
      box-shadow: none;
    }
  }

  @media screen and (max-width: 600px) {
    width: 300px;
  }

  @media screen and (max-width: 450px) {
    width: 250px;
    height: 65px;
  }

  @media screen and (max-width: 320px) {
    font-size: 16px;
    width: 200px;
    height: 60px;
  }
`;
