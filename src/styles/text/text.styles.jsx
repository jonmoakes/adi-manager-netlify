import styled from "styled-components";

export const WhitesmokeText = styled.p`
  color: whitesmoke;
`;

export const WhitesmokeTextWithShadow = styled.p`
  color: whitesmoke;
  text-shadow: 1px 1px 1px black;
`;

export const Emoji = styled.p`
  font-size: 50px;
  margin: -10px auto -30px auto;
`;

export const Amount = styled.p`
  color: #d62424;
  font-size: 30px;
`;

export const Text = styled.p`
  text-shadow: none;
  font-weight: 700;
`;

export const EmailLink = styled.p`
  text-transform: lowercase;
  color: black;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    text-decoration: underline;
    color: #d62424;

    @media screen and (max-width: 1366px) {
      color: black;
      text-decoration: none;
    }
  }
`;

export const OrderRefInfo = styled.p`
  text-transform: lowercase;
  font-size: 16px;
  color: black;
`;

export const ItalicStripeText = styled.p`
  font-style: italic;
  color: whitesmoke;
`;

export const HomePageSubheading = styled.p`
  color: whitesmoke;
  font-size: 30px;
  margin-top: -20px;

  @media screen and (max-width: 450px) {
    font-size: 25px;
    padding: 0px 20px;
  }
`;

export const QuantityAdjusterInfo = styled.p`
  color: whitesmoke;

  @media screen and (max-width: 450px) {
    font-size: 16px;
  }
`;
export const ErrorImageText = styled.p`
  font-size: 18px;
  color: black;
  text-align: center;
  padding: 5px 5px 5px 5px;
`;

export const NavLink = styled.p`
  font-size: 25px;
  padding: 0.1rem 1.5rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  transition: all 0.5s ease-in-out;
  color: #b9d1e5;

  &:hover {
    transform: scale(1.2);
    color: yellow;

    @media screen and (max-width: 1366px) {
      transform: none;
      transition: none;
    }
  }
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
