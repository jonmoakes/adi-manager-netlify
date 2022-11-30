import { useSelector } from "react-redux";

import useHandleAddTotalExpensesYearEntryChange from "./use-handle-add-total-expenses-year-entry-change";

import { selectErrorMessage } from "../../../store/error/error.selector";

import FetchError from "../../../components/fetch-error/fetch-error.component";
import AddEntryHeading from "../../../components/add-entry-heading/add-entry-heading.component";
import AddTotalExpensesYearSaveReturnButtons from "./add-total-expenses-year-save-return-buttons.component";
import AddTotalExpensesYearInstructions from "./add-total-expenses-year-instructions.component";
import AddTotalExpensesYearEntryForm from "./add-total-expenses-year-entry-form.component";

import { NoHeaderFooterContainer } from "../../../styles/container/container.styles";
import { AddEntryDiv } from "../../../styles/div/div.styles";

const AddTotalExpensesYear = () => {
  const { entry, handleChange } = useHandleAddTotalExpensesYearEntryChange();
  const errorMessage = useSelector(selectErrorMessage);

  return (
    <NoHeaderFooterContainer>
      <>
        {errorMessage ? (
          <FetchError />
        ) : (
          <>
            <AddEntryHeading />
            <AddTotalExpensesYearSaveReturnButtons {...{ entry }} />
            <AddEntryDiv>
              <AddTotalExpensesYearInstructions />
              <AddTotalExpensesYearEntryForm {...{ handleChange }} />
            </AddEntryDiv>
          </>
        )}
      </>
    </NoHeaderFooterContainer>
  );
};

export default AddTotalExpensesYear;
