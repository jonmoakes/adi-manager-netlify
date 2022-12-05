import styled from "styled-components";

export const TableWithStyle = styled.table`
  border-collapse: collapse;
  margin: 50px auto 300px auto;
  background-color: #ffab0f;
  text-shadow: none;
  white-space: pre-line;
  box-shadow: 10px 10px 10px black;
  width: 70%;

  th {
    font-size: 18px;
    background-color: #00975f;
    padding: 20px 10px;
    border: 3px solid black;

    @media screen and (max-width: 450px) {
      font-size: 14px;
    }
  }

  tr {
    &:nth-child(even) {
      background-color: lightgray;
    }
  }

  td {
    border: 3px solid black;
    padding: 20px 0px;
    width: auto;

    @media screen and (max-width: 600px) {
      font-size: 14px;
      padding: 10px 10px;
    }

    @media screen and (max-width: 450px) {
      padding: 10px 5px;
    }
  }

  @media screen and (max-width: 1024px) {
    width: 95%;
    box-shadow: none;
  }
`;

export const JanuaryCell = styled.td`
  background-color: whitesmoke;
`;

export const FebCell = styled.td`
  background-color: yellow;
`;

export const MarchCell = styled.td`
  background-color: lightblue;
`;

export const AprilCell = styled.td`
  background-color: tan;
`;

export const MayCell = styled.td`
  background-color: orange;
`;

export const JuneCell = styled.td`
  background-color: red;
`;

export const JulyCell = styled.td`
  background-color: cyan;
`;

export const AugustCell = styled.td`
  background-color: goldenrod;
`;

export const SeptemberCell = styled.td`
  background-color: lightsalmon;
`;

export const OctoberCell = styled.td`
  background-color: #fe46a5;
`;

export const NovemberCell = styled.td`
  background-color: tomato;
`;

export const DecemberCell = styled.td`
  background-color: pink;
`;

export const PaidCell = styled.td`
  background-color: #0eeb1e;
`;

export const NotPaidCell = styled.td`
  background-color: red;
`;

export const BlockBookingCell = styled.td`
  background-color: #0eeb1e;
`;
