import { useSelector } from "react-redux";

import useHandleAddExpensesEntryChange from "./use-handle-add-expenses-entry-change";

import { selectErrorMessage } from "../../../store/error/error.selector";

import FetchError from "../../../components/fetch-error/fetch-error.component";
import AddEntryHeading from "../../../components/add-entry-heading/add-entry-heading.component";
import AddExpensesEntryInstructions from "./add-expenses-entry-instructions.component";
import AddExpensesSaveReturnButtons from "./add-expenses-save-return-buttons.component";
import AddExpensesEntryForm from "./add-expenses-entry-form.component";

import { NoHeaderFooterContainer } from "../../../styles/container/container.styles";
import { AddEntryDiv } from "../../../styles/div/div.styles";

const AddExpensesEntryPage = () => {
  const { entry, handleChange } = useHandleAddExpensesEntryChange();
  const errorMessage = useSelector(selectErrorMessage);

  return (
    <NoHeaderFooterContainer>
      <>
        {errorMessage ? (
          <FetchError />
        ) : (
          <>
            <AddEntryHeading />
            <AddExpensesSaveReturnButtons {...{ entry }} />
            <AddEntryDiv>
              <AddExpensesEntryInstructions />
              <AddExpensesEntryForm {...{ handleChange }} />
            </AddEntryDiv>
          </>
        )}
      </>
    </NoHeaderFooterContainer>
  );
};

export default AddExpensesEntryPage;
