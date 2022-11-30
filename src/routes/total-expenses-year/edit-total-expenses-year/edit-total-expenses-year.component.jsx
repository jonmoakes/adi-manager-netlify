import { useSelector } from "react-redux";
import { selectErrorMessage } from "../../../store/error/error.selector";

import useHandleUpdatedTotalExpensesYearEntryChange from "./use-handle-updated-total-expenses-year-entry-change";
import useExpensesYearEmailBody from "./use-expenses-year-email-body";

import FetchError from "../../../components/fetch-error/fetch-error.component";
import EditEntryHeading from "../../../components/edit-entry-heading/edit-entry-heading.component";
import EditTotalExpensesYearEntrySaveReturnButtons from "./edit-total-expenses-year-entry-save-return-buttons.component";
import UpdateEntryInfo from "../../../components/tables/update-entry-info.component";
import EditTotalExpensesYearEntryForm from "./edit-total-expenses-year-entry-form.component";
import EmailEntryButtons from "../../../components/email-entry-buttons/email-entry-buttons.component";

import { NoHeaderFooterContainer } from "../../../styles/container/container.styles";
import { DataDiv } from "../../../styles/div/div.styles";

const EditTotalExpensesYearEntryPage = () => {
  const { handleChange, entry, updatedEntry } =
    useHandleUpdatedTotalExpensesYearEntryChange();
  const { emailBody } = useExpensesYearEmailBody();

  const errorMessage = useSelector(selectErrorMessage);

  return (
    <NoHeaderFooterContainer>
      {errorMessage ? (
        <FetchError />
      ) : (
        <>
          <EditEntryHeading />

          <DataDiv>
            <EditTotalExpensesYearEntrySaveReturnButtons
              {...{ entry, updatedEntry }}
            />

            <UpdateEntryInfo />
            <EditTotalExpensesYearEntryForm {...{ handleChange, entry }} />
            <EmailEntryButtons {...{ emailBody }} />
          </DataDiv>
        </>
      )}
    </NoHeaderFooterContainer>
  );
};

export default EditTotalExpensesYearEntryPage;
