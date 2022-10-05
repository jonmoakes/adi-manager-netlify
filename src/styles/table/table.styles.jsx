import styled from "styled-components";

export const TableWithStyle = styled.table`
  border-collapse: collapse;
  margin: 0px auto 200px auto;
  background-color: #b9d1e5;
  text-shadow: none;
  white-space: pre-line;
  width: 100%;

  th {
    font-size: 16px;
    background-color: #00ff77;
    padding: 20px 5px;
    border: 3px solid black;
    width: auto;

    @media screen and (max-width: 320px) {
      font-size: 16px;
    }
  }

  tr {
    &:nth-child(even) {
      background-color: yellow;
    }
  }

  td {
    border: 3px solid black;
    padding: 20px 5px;
    padding: 20px 10px;
    width: auto;

    @media screen and (max-width: 600px) {
      font-size: 14px;
    }

    @media screen and (max-width: 320px) {
      font-size: 12px;
    }
  }

  @media screen and (max-width: 1366px) {
    width: 200%;
    margin: 0px auto 0px auto;
  }
`;
