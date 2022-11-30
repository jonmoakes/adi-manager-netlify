import { useSelector } from "react-redux";

import useHandleUpdatedPupilEntryChange from "./use-handle-add-updated-pupil-entry-change";

import { selectErrorMessage } from "../../../store/error/error.selector";

import FetchError from "../../../components/fetch-error/fetch-error.component";
import EditEntryHeading from "../../../components/edit-entry-heading/edit-entry-heading.component";
import CallTextEmail from "./call-text-email.component";
import EditPupilsEntrySaveReturnButtons from "./edit-pupil-entry-save-return-buttons.component";
import UpdateEntryInfo from "../../../components/tables/update-entry-info.component";
import EditPupilsEntryForm from "./edit-pupil-entry-form.component";

import { NoHeaderFooterContainer } from "../../../styles/container/container.styles";
import { DataDiv } from "../../../styles/div/div.styles";

const EditPupilEntryPage = () => {
  const { handleChange, entry, updatedEntry } =
    useHandleUpdatedPupilEntryChange();

  const errorMessage = useSelector(selectErrorMessage);

  const { primaryPhoneNumber, emailAddress } = entry;

  return (
    <NoHeaderFooterContainer>
      {errorMessage ? (
        <FetchError />
      ) : (
        <>
          <EditEntryHeading />

          <DataDiv>
            <EditPupilsEntrySaveReturnButtons {...{ entry, updatedEntry }} />
            <UpdateEntryInfo {...{ primaryPhoneNumber, emailAddress }} />
            <CallTextEmail {...{ primaryPhoneNumber, emailAddress }} />
            <EditPupilsEntryForm {...{ handleChange, entry }} />
          </DataDiv>
        </>
      )}
    </NoHeaderFooterContainer>
  );
};

export default EditPupilEntryPage;
