import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  color: #247afc;
  text-decoration: none;
  text-shadow: 0.5px 0.5px 0.5px black;
  text-transform: capitalize;

  &:hover {
    color: blue;

    @media screen and (max-width: 1366px) {
      color: #247afc;
    }
  }
`;

export const ImageLink = styled(Link)`
  text-decoration: none;
`;
