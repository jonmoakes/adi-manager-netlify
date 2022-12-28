import styled from "styled-components";

export const HighlightText = styled.span`
  color: #cc1616;
  font-size: 20px;

  &.truncate {
    word-wrap: break-word;

    @media screen and (max-width: 450px) {
      font-size: 18px;
    }
  }
`;

export const SliderInstructions = styled.span`
  font-size: 14px;
  color: black;
  text-shadow: none;
`;

export const SmallHighlightText = styled.span`
  font-size: 14px;
  color: #cc1616;
`;

export const MonthlyPriceSpan = styled.span`
  color: yellow;
`;

export const LowercasedSpan = styled.span`
  text-transform: lowercase;
  color: #cc1616;
`;

export const GreenSpan = styled.span`
  color: #0eeb1e;
  text-shadow: 1px 1px 1px black;
`;

export const Amount = styled.span`
  color: #cc1616;
  font-size: 30px;
`;

export const TableHeaderRemoveText = styled.span`
  font-size: 20px;

  @media screen and (max-width: 600px) {
    font-size: 14px;
  }

  @media screen and (max-width: 320px) {
    font-size: 12px;
  }
`;
