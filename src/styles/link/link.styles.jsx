import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  color: #247AFC;
  text-decoration: none;
  text-shadow:0.5px 0.5px 0.5px black;
  text-transform: capitalize;

  &:hover {
    color: blue;

    @media screen and (max-width: 1366px) {
      color: #247AFC;
    }
  }
`;

export const FooterPageLink = styled(Link)`
  padding: 10px;
  color: black;
  text-decoration: none;

  &:hover {
    color: blue;

    @media screen and (max-width: 1366px) {
      color: black;
    }
  }
`;

export const PageLink = styled(Link)`
  color: black;

  &:hover {
    color: yellow;
    text-decoration: none;

    @media screen and (max-width: 1366px) {
      color: whitesmoke;
      text-decortation: none;
    }
  }
`;

export const ImageLink = styled(Link) ` 
  text-decoration:none;
`;
