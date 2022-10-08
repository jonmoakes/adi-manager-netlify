import styled from "styled-components";

export const H2 = styled.h2 `
  color:black;
  text-decoration:underline;
`;


export const RedH2Underline = styled.h2`
  color: #cc1616;
  text-decoration: underline;

  @media screen and (max-width: 450px) {
    font-size: 22px;
  }
`;

export const CombinedEntriesAmountHeading = styled.h2`
  color: black;
`;

export const Heading = styled.h2`
  color: black;
  text-decoration: underline;
`;

export const RedHeading = styled.h2`
  color: #d62424;
  text-shadow:none;
`;

export const ProductsHelpH2 = styled.h2`
  color: #d62424;
  font-weight: 900;
  text-decoration: underline;
`;

export const NameH2 = styled.h2`
  font-size: 25px;
  text-decoration: underline;

  @media screen and (max-width: 450px) {
    margin-top: -10px;
  }
`;

export const YellowH2 = styled.h2`
  color: yellow;
`;
