import { useSelector } from "react-redux";
import { selectErrorMessage } from "../../../store/error/error.selector";

import useHandleUpdatedDiaryEntryChange from "./use-handle-updated-diary-entry-change";

import FetchError from "../../../components/fetch-error/fetch-error.component";
import EditEntryHeading from "../../../components/edit-entry-heading/edit-entry-heading.component";
import EditEntrySaveReturnButtons from "./edit-entry-save-return-buttons.component";
import UpdateEntryInfo from "../../../components/tables/update-entry-info.component";
import EditDiaryEntryForm from "./edit-diary-entry-form.component";

import { NoHeaderFooterContainer } from "../../../styles/container/container.styles";
import { DataDiv } from "../../../styles/div/div.styles";

const EditDiaryEntry = () => {
  const { handleChange, entry, updatedEntry } =
    useHandleUpdatedDiaryEntryChange();

  const errorMessage = useSelector(selectErrorMessage);

  return (
    <NoHeaderFooterContainer>
      {errorMessage ? (
        <FetchError />
      ) : (
        <>
          <EditEntryHeading />

          <DataDiv>
            <EditEntrySaveReturnButtons {...{ entry, updatedEntry }} />
            <UpdateEntryInfo />
            <EditDiaryEntryForm {...{ handleChange, entry }} />
          </DataDiv>
        </>
      )}
    </NoHeaderFooterContainer>
  );
};

export default EditDiaryEntry;
