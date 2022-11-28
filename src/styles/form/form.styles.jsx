import styled from "styled-components";

export const Form = styled.form`
  width: 90%;
  padding: 30px 0px;
  display: inline-block;

  @media screen and (max-width: 850px) {
    padding: 30px 0px 10px 0px;
  }

  @media screen and (max-width: 450px) {
    padding: 20px 10px;
  }
`;

export const PaymentFormInput = styled(Form)`
  padding: 5px 15px;
`;

export const CreateDetailsForm = styled(Form)`
  padding: 15px 0px;
`;

export const StyledTextArea = styled.textarea`
  width: 100%;
  padding: 12px;
  border: 2px solid black;
  border-radius: 10px;
  box-shadow: 2px 2px 2px black;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  font-size: 18px;
  height: 200px;
  font-family: inherit;
  outline: none;
  text-transform: capitalize;
  font-weight: 700;

  &:focus {
    box-shadow: 4px 4px 4px black;
    border-color: #3085d6;
  }

  @media screen and (max-width: 450px) {
    font-size: 16px;
  }
`;

export const StyledSelect = styled.select`
  width: 100%;
  height: 50px;
  margin: 10px auto;
  border-radius: 15px;
  border: 2px solid black;
  text-align: center;
  color: black;
  text-transform: capitalize;
  text-align: left;
  padding-left: 10px;
  outline: none;
`;

export const CustomerDetailsInputs = styled(Form)`
  margin-top: 20px;
  width: 90%;
  display: inline-block;
  padding: 0px 10px 50px 10px;

  @media screen and (max-width: 450px) {
    padding: 0px 0px 50px 0px;
    width: 100%;
  }
`;

export const SignInUpForm = styled(Form)`
  width: 50%;
  margin: 0px auto;
  padding: 0px;

  @media screen and (max-width: 850px) {
    width: 80%;
  }
`;

export const Label = styled.label`
  float: left;
  font-size: 18px;

  @media screen and (max-width: 450px) {
    font-size: 16px;
  }
`;

export const ForgotPasswordLabel = styled(Label)`
  float: unset;
`;

export const PaginationSelect = styled.select`
  width: 200px;
  padding: 10px;
  border-radius: 10px;
  border: 2px solid black;
  outline: none;
  margin-top: -25px;

  &:focus {
    border-color: #247afd;
    box-shadow: 6px 6px 6px black;
  }
`;

//from jblueco
// export const PaginationInput = styled.input`
//   width: 200px;
//   height: 40px;
//   border-radius: 15px;
//   border: 2px solid black;
//   text-align: center;
// `;

export const AddNewProductSelect = styled.select`
  width: 100%;
  height: 50px;
  margin: 10px auto;
  border-radius: 15px;
  border: 2px solid black;
  text-align: center;
  color: black;
  text-transform: capitalize;
  text-align: left;
  padding-left: 10px;
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 50px;
  padding: 12px;
  border: 2px solid black;
  border-radius: 10px;
  box-shadow: 2px 2px 2px black;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 20px;
  font-size: 18px;
  font-family: inherit;
  outline: none;
  background-color: whitesmoke;

  &.date-picker {
    -webkit-appearance: none;
    color: black;
  }

  &:focus {
    box-shadow: 4px 4px 4px black;
    border-color: #3085d6;
  }

  ::-webkit-input-placeholder {
    text-transform: capitalize;
  }
  ::-moz-placeholder {
    text-transform: capitalize;
  }
  :-ms-input-placeholder {
    text-transform: capitalize;
  }
  ::placeholder {
    text-transform: capitalize;
  }

  @media screen and (max-width: 450px) {
    font-size: 16px;

    ::-moz-placeholder {
      font-size: 16px;
    }
    :-ms-input-placeholder {
      font-size: 16px;
    }
    ::placeholder {
      font-size: 16px;
    }
  }

  @media screen and (max-width: 320px) {
    height: 40px;
  }

  @media screen and (max-width: 280px) {
    ::-webkit-input-placeholder {
      font-size: 10px;
    }
    ::-moz-placeholder {
      font-size: 10px;
    }
    :-ms-input-placeholder {
      font-size: 10px;
    }
    ::placeholder {
      font-size: 10px;
    }
  }
`;

export const CapitalizedInput = styled(StyledInput)`
  text-transform: capitalize;
`;

export const LowercasedInput = styled(StyledInput)`
  text-transform: lowercase;
`;

export const UppercasedInput = styled(StyledInput)`
  text-transform: uppercase;
`;

export const ResetPasswordInput = styled(StyledInput)`
  margin-top: 20px;
  margin-bottom: 50px;
`;

//from original adi manager
// export const SearchInput = styled.input`
//   width: 90%;
//   padding: 10px;

//   border-radius: 10px;
//   border: 2px solid black;
//   outline: none;
//   font-size: 16px;
//   color: #cc1616;
//   &:focus {
//     border-color: #247afd;
//     box-shadow: 6px 6px 6px black;
//   }
// `;

export const SearchInput = styled.input`
  margin: 0px;
  padding: 0px;
  width: 100%;
  outline: none;
  height: 50px;
  border-radius: 5px;
  background-color: whitesmoke;
  outline: none;
  border: 2px solid black;
  padding-left: 20px;
  font-family: inherit;
  font-size: 20px;

  &:focus {
    box-shadow: 4px 4px 4px black;
    border-color: #3085d6;
  }

  /* clears the ‘X’ from Internet Explorer */
  ::-ms-clear {
    display: none;
    width: 0;
    height: 0;
  }
  ::-ms-reveal {
    display: none;
    width: 0;
    height: 0;
  }
  /* clears the ‘X’ from Chrome */
  ::-webkit-search-decoration,
  ::-webkit-search-cancel-button,
  ::-webkit-search-results-button,
  ::-webkit-search-results-decoration {
    display: none;
  }

  :-webkit-input-placeholder {
    font-size: 16px;
    @media screen and (max-width: 280px) {
      font-size: 14px;
    }
  }

  ::-moz-placeholder {
    font-size: 16px;
    @media screen and (max-width: 280px) {
      font-size: 14px;
    }
  }
  :-ms-input-placeholder {
    font-size: 16px;
    @media screen and (max-width: 280px) {
      font-size: 14px;
    }
  }
  ::placeholder {
    font-size: 16px;
    @media screen and (max-width: 280px) {
      font-size: 14px;
    }
  }

  @media screen and (max-width: 450px) {
    height: 40px;
  }

  @media screen and (max-width: 320px) {
    padding-left: 5px;
  }
`;

export const PaginationInput = styled(SearchInput)`
  width: 100px;
  height: 30px;
  font-size: 20px;
`;

// from original adi manager
// export const PaginationInput = styled.input`
//   width: 50px;
//   outline: none;
// `;

export const QuantityInput = styled.input`
  color: black;
  font-size: 18px;
  margin: 0px auto 20px auto;
  width: 80%;
  height: 30px;
  border-radius: 5px;
  border: 2px solid black;
  font-family: inherit;
  outline: none;

  &:focus {
    box-shadow: 4px 4px 4px black;
    border-color: #3085d6;
  }

  @media screen and (max-width: 450px) {
    font-size: 16px;
  }
`;
