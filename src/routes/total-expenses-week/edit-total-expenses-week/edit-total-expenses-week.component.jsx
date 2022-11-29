import { useSelector } from "react-redux";
import { selectErrorMessage } from "../../../store/error/error.selector";

import useHandleUpdatedTotalExpensesWeekEntryChange from "./use-handle-updated-total-expenses-week-entry-change";
import useExpensesWeekEmailBody from "./use-expenses-week-email-body";

import FetchError from "../../../components/fetch-error/fetch-error.component";
import EditEntryHeading from "../../../components/edit-entry-heading/edit-entry-heading.component";
import EditTotalExpensesWeekEntrySaveReturnButtons from "./edit-total-expenses-week-entry-save-return-buttons.component";
import UpdateEntryInfo from "../../../components/tables/update-entry-info.component";
import EditTotalExpensesWeekEntryForm from "./edit-total-expenses-week-entry-form.component";
import EmailEntryButtons from "../../../components/email-entry-buttons/email-entry-buttons.component";

import { NoHeaderFooterContainer } from "../../../styles/container/container.styles";
import { DataDiv } from "../../../styles/div/div.styles";

const EditTotalExpensesWeekEntry = () => {
  const { handleChange, entry, updatedEntry } =
    useHandleUpdatedTotalExpensesWeekEntryChange();
  const { emailBody } = useExpensesWeekEmailBody();

  const errorMessage = useSelector(selectErrorMessage);

  return (
    <NoHeaderFooterContainer>
      {errorMessage ? (
        <FetchError />
      ) : (
        <>
          <EditEntryHeading />

          <DataDiv>
            <EditTotalExpensesWeekEntrySaveReturnButtons
              {...{ entry, updatedEntry }}
            />

            <UpdateEntryInfo />
            <EditTotalExpensesWeekEntryForm {...{ handleChange, entry }} />
            <EmailEntryButtons {...{ emailBody }} />
          </DataDiv>
        </>
      )}
    </NoHeaderFooterContainer>
  );
};

export default EditTotalExpensesWeekEntry;
