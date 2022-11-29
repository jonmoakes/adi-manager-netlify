import { useSelector } from "react-redux";

import useHandleAddTotalExpensesMonthEntryChange from "./use-handle-add-total-expenses-month-entry-change";

import { selectErrorMessage } from "../../../store/error/error.selector";

import FetchError from "../../../components/fetch-error/fetch-error.component";
import AddEntryHeading from "../../../components/add-entry-heading/add-entry-heading.component";
import AddTotalExpensesMonthSaveReturnButtons from "./add-total-expenses-month-save-return-buttons.component";
import AddTotalExpensesMonthInstructions from "./add-total-expenses-month-instructions";
import AddTotalExpensesMonthEntryForm from "./add-total-expenses-month-entry-form.component";

import { NoHeaderFooterContainer } from "../../../styles/container/container.styles";
import { AddEntryDiv } from "../../../styles/div/div.styles";

const AddTotalExpensesMonth = () => {
  const { entry, handleChange } = useHandleAddTotalExpensesMonthEntryChange();
  const errorMessage = useSelector(selectErrorMessage);

  return (
    <NoHeaderFooterContainer>
      <>
        {errorMessage ? (
          <FetchError />
        ) : (
          <>
            <AddEntryHeading />
            <AddTotalExpensesMonthSaveReturnButtons {...{ entry }} />
            <AddEntryDiv>
              <AddTotalExpensesMonthInstructions />
              <AddTotalExpensesMonthEntryForm {...{ handleChange }} />
            </AddEntryDiv>
          </>
        )}
      </>
    </NoHeaderFooterContainer>
  );
};

export default AddTotalExpensesMonth;
