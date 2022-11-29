import { useSelector } from "react-redux";
import { selectErrorMessage } from "../../../store/error/error.selector";

import useHandleUpdatedTotalExpensesMonthEntryChange from "./use-handle-updated-total-expenses-month-entry-change";
import useExpensesMonthEmailBody from "./use-expenses-month-email-body";

import FetchError from "../../../components/fetch-error/fetch-error.component";
import EditEntryHeading from "../../../components/edit-entry-heading/edit-entry-heading.component";
import EditTotalExpensesMonthEntrySaveReturnButtons from "./edit-total-expenses-month-entry-save-return-buttons.component";
import UpdateEntryInfo from "../../../components/tables/update-entry-info.component";
import EditTotalExpensesMonthEntryForm from "./edit-total-expenses-month-entry-form.component";
import EmailEntryButtons from "../../../components/email-entry-buttons/email-entry-buttons.component";

import { NoHeaderFooterContainer } from "../../../styles/container/container.styles";
import { DataDiv } from "../../../styles/div/div.styles";

const EditTotalExpensesMonthEntryPage = () => {
  const { handleChange, entry, updatedEntry } =
    useHandleUpdatedTotalExpensesMonthEntryChange();
  const { emailBody } = useExpensesMonthEmailBody();

  const errorMessage = useSelector(selectErrorMessage);

  return (
    <NoHeaderFooterContainer>
      {errorMessage ? (
        <FetchError />
      ) : (
        <>
          <EditEntryHeading />

          <DataDiv>
            <EditTotalExpensesMonthEntrySaveReturnButtons
              {...{ entry, updatedEntry }}
            />

            <UpdateEntryInfo />
            <EditTotalExpensesMonthEntryForm {...{ handleChange, entry }} />
            <EmailEntryButtons {...{ emailBody }} />
          </DataDiv>
        </>
      )}
    </NoHeaderFooterContainer>
  );
};

export default EditTotalExpensesMonthEntryPage;
