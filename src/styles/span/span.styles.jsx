import styled from "styled-components";

export const HighlightText = styled.span`
  color: #cc1616;
`;

export const MonthlyPriceSpan = styled.span ` 
  color:yellow;
`;

export const OptionsDetail = styled.span`
  color: #d62424;
`;

export const PriceDetail = styled.span`
  color: blue;
  font-size: 25px;
  margin-bottom: 15px;
`;

export const InputError = styled.span`
  color: #d62424;
  font-size: 20px;

  @media screen and (max-width: 600px) {
    font-size: 18px;
  }
`;

export const UpArrow = styled.span`
  font-size: 25px;
`;

export const SelectProductSpan = styled.span`
  padding: 2px 5px;
  border-radius: 5px;
  background-color: salmon;
  color: black;
  border: 1px solid black;
`;

export const AddToCartSpan = styled(SelectProductSpan)`
  background-color: #00ff2a;
`;

export const CheckboxInfo = styled.span`
  background-color: #0afe76;
  border: 1px solid black;
  border-radius: 5px;
  padding: 5px;
`;

export const TableOrderInfo = styled.span`
  background-color: whitesmoke;
  border: 1px solid black;
  padding: 2px;
  border-radius: 5px;
`;

export const CalculatedTotalInfo = styled.span`
  color: blue;
`;

export const AddNewProductInfo = styled.span`
  background-color: #10fd77;
  border: 1px solid black;
  padding: 5px;
  border-radius: 50px;
  color: black;
`;

export const UploadProductInfo = styled.span`
  background-color: yellow;
  border: 1px solid black;
  padding: 2px;
  border-radius: 5px;
  color: black;
`;

export const ViewInfo = styled.span`
  font-size: 30px;
  text-shadow: none;
  margin-bottom: 6px;
  text-transform: capitalize;

  @media screen and (max-width: 800px) {
    font-size: 24px;
  }

  @media screen and (max-width: 280px) {
    font-size: 20px;
  }
`;

export const Description = styled.span`
  margin-top: 10px;
  font-weight: bold;
  text-shadow: none;
  font-size: 20px;
`;

export const Price = styled.span`
  margin-top: 15px;
  font-weight: bold;
  font-size: 25px;
  color: blue;

  @media screen and (max-width: 450px) {
    width: unset;
  }
`;

export const HomePageTitleTop = styled.span`
  color: whitesmoke;
`;

export const Required = styled.span`
  color: #d62424;
`;

export const HeadingText = styled.span`
  font-size: 25px;
  color: whitesmoke;

  @media screen and (max-width: 1366px) {
    font-size: 20px;
  }

  @media screen and (max-width: 450px) {
    font-size: 14px;
  }

  @media screen and (max-width: 375px) {
    font-size: 12px;
  }
`;

export const PriceNumber = styled.span`
  color: #d62424;
  font-size: 50px;
`;

export const QuantityRequiredSpan = styled.span`
  color: #d62424;
  font-size: 16px;
  background-color: black;
  padding: 5px;
  border: none;
  border-radius: 5px;
`;

export const CheckoutItemText = styled.span`
  width: 30%;

  @media screen and (max-width: 450px) {
    padding-left: 5px;
    font-size: 16px;
  }
`;

export const Value = styled.span`
  margin: 0 10px;
  color: #d62424;
  font-size: 30px;
`;

export const ItemPrice = styled.span`
  width: 20%;
`;

export const RemoveItem = styled.span`
  width: 20%;
  cursor: pointer;
  color: red;
`;

export const HeaderRemoveText = styled.span`
  font-size: 20px;

  @media screen and (max-width: 600px) {
    font-size: 14px;
  }

  @media screen and (max-width: 320px) {
    font-size: 12px;
  }
`;

export const HamburgerSpan = styled.span`
  height: 6px;
  width: 35px;
  background-color: #b9d1e5;
  margin-bottom: 4px;
  border-radius: 5px;
`;

export const HamburgerSpanTop = styled(HamburgerSpan)`
  margin-top: 3px;
`;

export const HamburgerSpanCloseMenu = styled(HamburgerSpan)`
  background-color: #d62424;
`;

export const BorderLink = styled.span`
  border: ${({ showHamburgerMenu }) =>
    showHamburgerMenu ? "none" : "2px solid #b9d1e5"};
  padding: ${({ showHamburgerMenu }) => (showHamburgerMenu ? "none" : "5px")};
  border-radius: ${({ showHamburgerMenu }) =>
    showHamburgerMenu ? "none" : "10px"};

  &:hover {
    border-color: ${({ showHamburgerMenu }) =>
      showHamburgerMenu ? "none" : "yellow"};
  }
`;
