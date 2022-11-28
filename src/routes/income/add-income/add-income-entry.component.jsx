import { useSelector } from "react-redux";

import useHandleAddIncomeEntryChange from "./use-handle-add-income-entry-change";

import { selectErrorMessage } from "../../../store/error/error.selector";

import FetchError from "../../../components/fetch-error/fetch-error.component";
import AddEntryHeading from "../../../components/add-entry-heading/add-entry-heading.component";

import AddIncomeSaveReturnButtons from "./add-income-save-return-buttons.component";
import AddIncomeEntryInstructions from "./add-income-entry-instructions.component";
import AddIncomeEntryForm from "./add-income-entry-form.component";

import { NoHeaderFooterContainer } from "../../../styles/container/container.styles";
import { AddEntryDiv } from "../../../styles/div/div.styles";

const AddIncomeEntry = () => {
  const { entry, handleChange } = useHandleAddIncomeEntryChange();
  const errorMessage = useSelector(selectErrorMessage);

  return (
    <NoHeaderFooterContainer>
      <>
        {errorMessage ? (
          <FetchError />
        ) : (
          <>
            <AddEntryHeading />
            <AddIncomeSaveReturnButtons {...{ entry }} />
            <AddEntryDiv>
              <AddIncomeEntryInstructions />
              <AddIncomeEntryForm {...{ handleChange }} />
            </AddEntryDiv>
          </>
        )}
      </>
    </NoHeaderFooterContainer>
  );
};

export default AddIncomeEntry;
