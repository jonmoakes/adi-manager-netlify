import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  color: red;
  text-decoration: none;
  text-transform: capitalize;

  &:hover {
    color: blue;

    @media screen and (max-width: 1366px) {
      color: red;
    }
  }
`;

export const FooterPageLink = styled(Link)`
  padding: 10px;
  color: #b9d1e5;
  text-decoration: none;

  &:hover {
    color: blue;

    @media screen and (max-width: 1366px) {
      color: #b9d1e5;
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
