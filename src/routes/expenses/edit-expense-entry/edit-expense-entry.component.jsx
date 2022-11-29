import { useSelector } from "react-redux";
import { selectErrorMessage } from "../../../store/error/error.selector";

import useHandleUpdatedExpensesEntryChange from "./use-handle-updated-expenses-entry-change";
import useExpensesEmailBody from "./use-expenses-email-body";

import FetchError from "../../../components/fetch-error/fetch-error.component";
import EditEntryHeading from "../../../components/edit-entry-heading/edit-entry-heading.component";
import EditExpenseEntrySaveReturnButtons from "./edit-expense-entry-save-return-buttons.component";
import UpdateEntryInfo from "../../../components/tables/update-entry-info.component";
import EditExpenseEntryForm from "./edit-expense-entry-form.component";
import EmailEntryButtons from "../../../components/email-entry-buttons/email-entry-buttons.component";

import { NoHeaderFooterContainer } from "../../../styles/container/container.styles";
import { DataDiv } from "../../../styles/div/div.styles";

const EditExpenseEntryPage = () => {
  const { handleChange, entry, updatedEntry } =
    useHandleUpdatedExpensesEntryChange();
  const { emailBody } = useExpensesEmailBody();

  const errorMessage = useSelector(selectErrorMessage);

  return (
    <NoHeaderFooterContainer>
      {errorMessage ? (
        <FetchError />
      ) : (
        <>
          <EditEntryHeading />

          <DataDiv>
            <EditExpenseEntrySaveReturnButtons {...{ entry, updatedEntry }} />
            <UpdateEntryInfo />
            <EditExpenseEntryForm {...{ handleChange, entry }} />
            <EmailEntryButtons {...{ emailBody }} />
          </DataDiv>
        </>
      )}
    </NoHeaderFooterContainer>
  );
};

export default EditExpenseEntryPage;
