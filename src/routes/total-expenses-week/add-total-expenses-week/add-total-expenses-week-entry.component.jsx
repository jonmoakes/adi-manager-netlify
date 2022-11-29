import { useSelector } from "react-redux";

import useHandleAddTotalExpensesWeekEntryChange from "./use-handle-add-total-expenses-week-entry-change";

import { selectErrorMessage } from "../../../store/error/error.selector";

import FetchError from "../../../components/fetch-error/fetch-error.component";
import AddEntryHeading from "../../../components/add-entry-heading/add-entry-heading.component";
import AddTotalExpensesWeekSaveReturnButtons from "./add-total-expenses-week-save-return-buttons.component";
import AddTotalExpensesWeekInstructions from "./add-total-expenses-week-instructions.component";
import AddTotalExpensesWeekEntryForm from "./add-total-expenses-week-entry-form.component";

import { NoHeaderFooterContainer } from "../../../styles/container/container.styles";
import { AddEntryDiv } from "../../../styles/div/div.styles";

const AddTotalExpensesWeekEntry = () => {
  const { entry, handleChange } = useHandleAddTotalExpensesWeekEntryChange();
  const errorMessage = useSelector(selectErrorMessage);

  return (
    <NoHeaderFooterContainer>
      <>
        {errorMessage ? (
          <FetchError />
        ) : (
          <>
            <AddEntryHeading />
            <AddTotalExpensesWeekSaveReturnButtons {...{ entry }} />
            <AddEntryDiv>
              <AddTotalExpensesWeekInstructions />
              <AddTotalExpensesWeekEntryForm {...{ handleChange }} />
            </AddEntryDiv>
          </>
        )}
      </>
    </NoHeaderFooterContainer>
  );
};

export default AddTotalExpensesWeekEntry;
