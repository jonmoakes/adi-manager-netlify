import { useSelector } from "react-redux";
import { selectErrorMessage } from "../../../store/error/error.selector";

import useHandleUpdatedIncomeEntryChange from "./use-handle-updated-income-entry-change";
import useIncomeEmailBody from "./use-income-email-body";

import FetchError from "../../../components/fetch-error/fetch-error.component";
import EditEntryHeading from "../../../components/edit-entry-heading/edit-entry-heading.component";
import EditIncomeEntrySaveReturnButtons from "./edit-income-entry-save-return-buttons.component";
import UpdateEntryInfo from "../../../components/tables/update-entry-info.component";
import EditIncomeEntryForm from "./edit-income-entry-form.component";
import EmailEntryButtons from "../../../components/email-entry-buttons/email-entry-buttons.component";

import { NoHeaderFooterContainer } from "../../../styles/container/container.styles";
import { DataDiv } from "../../../styles/div/div.styles";

const EditIncomeEntryPage = () => {
  const { handleChange, entry, updatedEntry } =
    useHandleUpdatedIncomeEntryChange();
  const { emailBody } = useIncomeEmailBody();

  const errorMessage = useSelector(selectErrorMessage);

  return (
    <NoHeaderFooterContainer>
      {errorMessage ? (
        <FetchError />
      ) : (
        <>
          <EditEntryHeading />

          <DataDiv>
            <EditIncomeEntrySaveReturnButtons {...{ entry, updatedEntry }} />
            <UpdateEntryInfo />
            <EditIncomeEntryForm {...{ handleChange, entry }} />
            <EmailEntryButtons {...{ emailBody }} />
          </DataDiv>
        </>
      )}
    </NoHeaderFooterContainer>
  );
};

export default EditIncomeEntryPage;
