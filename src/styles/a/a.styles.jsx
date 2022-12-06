import styled from "styled-components";

export const LowercaseA = styled.a`
  color: whitesmoke;
  text-transform: lowercase;
  text-shadow: 0.5px 0.5px 0.5px black;

  &.instructions {
    &:hover {
      color: white;
    }
  }

  &:hover {
    color: blue;

    @media screen and (max-width: 1366px) {
      color: whitesmoke;
    }
  }
`;

export const SolarisLink = styled.a`
  color: #247afc;
  text-decoration: none;
  text-shadow: 0.5px 0.5px 0.5px black;

  &:hover {
    color: blue;
  }
`;

export const Href = styled.a`
  color: #247afc;
  text-shadow: 0.5px 0.5px 0.5px black;
  text-decoration: none;

  &:hover {
    color: blue;

    @media screen and (max-width: 1366px) {
      color: #247afc;
    }
  }
`;

export const LowercaseHref = styled(Href)`
  text-transform: lowercase;
`;
