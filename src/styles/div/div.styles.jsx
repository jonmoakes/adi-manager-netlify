import styled, { keyframes } from "styled-components";
import {
  bounceInDown,
  slideInLeft,
  slideInRight,
  rotateInUpRight,
} from "react-animations";

const slideInLeftAnimation = keyframes`${slideInLeft}`;
const slideInRightAnimation = keyframes`${slideInRight}`;
const bounceInDownAnimation = keyframes`${bounceInDown}`;
const rotateInUpRightAnimation = keyframes`${rotateInUpRight}`;

export const Div = styled.div`
  margin: 0px auto 75px auto;
  background-color: #ffab0f;
  width: 50%;
  border-radius: 15px;
  padding: 20px 20px 20px 20px;
  box-shadow: 10px 10px 10px black;
  border: 2px solid black;

  @media screen and (max-width: 1366px) {
    box-shadow: none;
    width: 70%;
  }

  @media screen and (max-width: 600px) {
    margin: 0px auto 50px auto;
  }

  @media screen and (max-width: 450px) {
    width: 85%;
    padding: 20px 10px 20px 10px;
  }
`;

export const AddEntryDiv = styled(Div)`
  margin: 0px auto 200px auto;
`;

export const DataDiv = styled.div`
  width: 50%;
  margin: 0px auto 300px auto;
  background-color: #ffab0f;
  padding: 20px 20px 100px 20px;
  border: 2px solid black;
  border-radius: 15px;

  &.edit {
    background-color: lightgrey;
  }

  @media screen and (max-width: 1024px) {
    width: 70%;
  }

  @media screen and (max-width: 450px) {
    width: 90%;
    padding: 20px 10px 100px 10px;
  }

  @media screen and (max-width: 320px) {
    padding: 10px 5px 50px 5px;
  }
`;

export const TableContainerDiv = styled.div`
  width: 100%;
`;

export const TableDiv = styled.div`
  width: 100%;
  margin: 0px auto 100px auto;
`;

export const FlexColumnCenteredDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const PaginationDiv = styled(Div)`
  margin: -250px auto 300px auto;
  border: none;
  box-shadow: none;
  background-color: transparent;

  @media screen and (max-width: 450px) {
    margin: -300px auto 200px auto;
  }
`;

export const PaginationTextDiv = styled.div`
  margin-bottom: 40px;
`;

export const SearchDiv = styled.div`
  width: 50%;
  position: relative;
  margin: 0 auto;
  animation: 1s ${slideInLeftAnimation};

  @media screen and (max-width: 1366px) {
    width: 70%;
  }

  @media screen and (max-width: 450px) {
    width: 80%;
  }
`;

export const TableSearchDiv = styled(SearchDiv)`
  width: 50%;
  position: relative;
  margin: 40px auto 0px auto;
  animation: 1s ${slideInLeftAnimation};

  @media screen and (max-width: 1366px) {
    width: 70%;
  }

  @media screen and (max-width: 450px) {
    width: 80%;
    margin: 25px auto 0px auto;
  }
`;

export const FooterDiv = styled.div`
  margin: -100px auto 150px auto;
  background-color: #ffab0f;
  width: 50%;
  border-radius: 15px;
  padding: 20px 20px 20px 20px;
  box-shadow: 10px 10px 10px black;
  border: 2px solid black;

  @media screen and (max-width: 1366px) {
    box-shadow: none;
    width: 70%;
  }

  @media screen and (max-width: 600px) {
    margin: -50px auto 150px auto;
  }

  @media screen and (max-width: 450px) {
    width: 85%;
    padding: 20px 10px 20px 10px;
  }
`;

export const PhoneDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  figure {
    width: 100%;
    text-shadow: none;
    margin: 10px 20px 0px 20px;
  }

  @media screen and (max-width: 600px) {
    figure {
      font-size: 14px;
    }
  }
`;

export const SlideInDiv = styled.div`
  animation: 2s ${slideInLeftAnimation};
`;

export const FeaturesDiv = styled(Div)`
  @media screen and (max-width: 450px) {
    padding: 20px 5px 20px 10px;
  }
`;

export const ButtonsDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & .button {
    margin: 20px auto;
  }
`;

export const UsefulLinksDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NoSearchResultDiv = styled.div`
  width: 50%;
  height: auto;
  margin: 50px auto;
  background-color: #ffab0f;
  padding: 20px;
  border-radius: 15px;
  border: 2px solid black;
  animation: 1s ${bounceInDownAnimation};

  @media screen and (max-width: 600px) {
    width: 80%;
  }
`;

export const ErrorDiv = styled.div`
  background-color: #cc1616;
  border: 2px solid black;
  width: 80%;
  margin: 0 auto;
  height: auto;
  padding: 20px 10px 20px 10px;
  border-radius: 15px;
`;

export const BounceInDiv = styled.div`
  animation: 1s ${bounceInDownAnimation};
`;

export const DateDiv = styled.div`
  width: 100%;
  margin: 40px auto -40px auto;

  &.progress {
    margin: 0px auto;
  }

  @media screen and (max-width: 850px) {
    margin: 30px auto -30px auto;
  }

  @media screen and (max-width: 600px) {
    margin: 30px auto -20px auto;
  }
`;

export const WarningDiv = styled(ErrorDiv)`
  background-color: #3085d6;
`;

export const TableContainer = styled.div`
  width: 90%;
  animation: 1.5s ${bounceInDownAnimation};
  margin: 50px auto;
  height: auto;
  border-radius: 15px;
  padding: 0px 20px 0px 20px;

  @media screen and (max-width: 450px) {
    width: 85%;
    padding: 0px 10px 0px 10px;
  }
`;

export const CardInputDiv = styled.div`
  background-color: whitesmoke;
  height: 80px;
  width: 90%;
  margin: 30px auto 30px auto;
  padding: 30px 20px 0px 20px;
  border-radius: 15px;
  border: 2px solid black;

  @media screen and (max-width: 1366px) {
    width: 80%;
    padding: 30px 0px 0px 0px;
  }

  @media screen and (max-width: 600px) {
    width: 95%;
  }
`;

export const MissingDataDiv = styled.div`
  width: 90%;
  height: auto;
  margin: 0px auto 30px auto;
  background-color: #bc0d0d;
  border: 2px solid black;
  border-radius: 15px;
`;

export const MonthlyPriceOptionDiv = styled.div`
  border: 2px solid black;
  border-radius: 15px;
  margin: 20px auto;
  padding: 0px 5px 20px 5px;
  width: 85%;
  background-color: #247afd;
`;

export const YearPriceOptionDiv = styled(MonthlyPriceOptionDiv)`
  background-color: #3ec43e;
`;

export const TableEditsButtonDiv = styled.div`
  width: 100%;
  margin: 20px auto;

  @media screen and (max-width: 1024px) {
    margin: -20px auto 0px auto;
  }
  @media screen and (max-width: 450px) {
    margin: 0px auto 0px auto;
  }
`;

export const ErrorImageOverlay = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: whitesmoke;
`;

export const ErrorImageContainer = styled.div`
  display: inline-block;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-size: cover;
  background-position: center;
  width: 40vh;
  height: 50vh;
  border: 2px solid black;
  border-radius: 10px;
  margin-top: 50px;
`;

export const InstructionsDiv = styled.div`
  width: 100%;
  height: auto;
  animation: 1s ${bounceInDownAnimation};
  padding: 20px 0px;
  border: 2px solid black;
  border-radius: 15px;
  margin: 20px auto 20px auto;
  background-color: #2099ef;

  @media screen and (max-width: 1366px) {
    padding: 20px 20px;
  }

  @media screen and (max-width: 850px) {
    width: 70%;
  }

  @media screen and (max-width: 450px) {
    padding: 10px 10px;
    width: 90%;
  }
`;

export const PrivacyDiv = styled.div`
  margin: 30px 0px;
`;

export const ImageDiv = styled.div`
  width: auto;
  height: auto;
  margin: 30px auto 0px auto;
`;

export const Nav = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #ffab0f;
  z-index: 3;
  height: 80px;
  border-bottom: 5px solid black;
`;

export const HeaderNavigationItems = styled.div`
  li {
    padding: 0 2rem;
    transition: all 0.5s ease-in-out;

    @media screen and (max-width: 450px) {
      padding: 0 1.2rem;
    }

    @media screen and (max-width: 450px) {
      padding: 0 0rem;
    }

    &:hover {
      transform: scale(1.2);

      @media screen and (max-width: 1366px) {
        transform: unset;
      }
    }
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: flex-end;

    @media screen and (max-width: 450px) {
      justify-content: space-evenly;
    }
  }
`;

export const FooterNavigationItems = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #ffab0f;
  z-index: 3;
  height: 80px;
  border-top: 5px solid black;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-evenly;

    @media screen and (max-width: 450px) {
      justify-content: space-evenly;
    }
  }

  li {
    padding: 0 2rem;
    transition: all 0.5s ease-in-out;

    @media screen and (max-width: 450px) {
      padding: 0 1.2rem;
    }

    @media screen and (max-width: 450px) {
      padding: 0 0rem;
    }

    &:hover {
      transform: scale(1.2);

      @media screen and (max-width: 1366px) {
        transform: unset;
      }
    }
  }
`;

export const RotateDiv = styled(Div)`
  animation: 1s ${rotateInUpRightAnimation};

  span {
    text-shadow: 1px 1px 1px black;
  }
`;

export const LoaderDiv = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 30;
  background-color: black;
  opacity: 0.8;
`;

export const SubjectsDiv = styled.div`
  margin: 25px auto 0px auto;
  width: 100%;
`;

export const SubjectsInputsDiv = styled.div`
  background-color: plum;
  padding: 20px 10px 30px 10px;
  border: 2px solid black;
  border-radius: 10px;
  margin: 40px auto 0px auto;
  width: 90%;
  text-transform: capitalize;

  h2 {
    animation: 0.5s ${slideInRightAnimation};
  }

  label {
    animation: 0.5s ${slideInLeftAnimation};
  }

  textarea {
    animation: 0.5s ${slideInLeftAnimation};
  }
`;

export const StarsDiv = styled.div`
  background-color: lightgrey;
  border: 2px solid black;
  border-radius: 10px;
  margin: 20px auto 0px auto;
  width: 60%;
  animation: 0.5s ${slideInLeftAnimation};

  @media screen and (max-width: 450px) {
    width: 90%;
  }
`;

export const SliderDiv = styled.div`
  margin: 20px auto;
  width: 100%;
`;

export const CreditsLinkDiv = styled(Div)`
  margin: 0px auto 40px auto;
`;
