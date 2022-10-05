import styled from "styled-components";

export const A = styled.a`
  color: blue;
`;

export const LowercaseA = styled.a`
  text-transform: lowercase;
`;

export const SolarisLink = styled.a`
  color: #b9d1e5;
  text-decoration: none;

  &:hover {
    color: blue;
  }
`;

export const Href = styled.a`
  color: red;

  &:hover {
    color: blue;

    @media screen and (max-width: 1366px) {
      color: red;
    }
  }
`;
