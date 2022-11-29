import { useSelector } from "react-redux";

import useHandleUpdatedLessonEntryChange from "./use-handle-updated-lesson-entry-change";
import useLessonEmailBody from "./use-lesson-email-body";

import { selectErrorMessage } from "../../../store/error/error.selector";

import FetchError from "../../../components/fetch-error/fetch-error.component";
import EditEntryHeading from "../../../components/edit-entry-heading/edit-entry-heading.component";
import EditLessonEntrySaveReturnButtons from "./edit-lesson-entry-save-return-buttons.component";
import UpdateEntryInfo from "../../../components/tables/update-entry-info.component";
import EditLessonEntryForm from "./edit-lesson-entry-form.component";
import EmailEntryButtons from "../../../components/email-entry-buttons/email-entry-buttons.component";

import { NoHeaderFooterContainer } from "../../../styles/container/container.styles";
import { DataDiv } from "../../../styles/div/div.styles";

const EditLessonEntryPage = () => {
  const { handleChange, entry, updatedEntry } =
    useHandleUpdatedLessonEntryChange();
  const { emailBody } = useLessonEmailBody();

  const errorMessage = useSelector(selectErrorMessage);

  return (
    <NoHeaderFooterContainer>
      {errorMessage ? (
        <FetchError />
      ) : (
        <>
          <EditEntryHeading />

          <DataDiv>
            <EditLessonEntrySaveReturnButtons {...{ entry, updatedEntry }} />
            <UpdateEntryInfo />
            <EditLessonEntryForm {...{ handleChange, entry }} />
            <EmailEntryButtons {...{ emailBody }} />
          </DataDiv>
        </>
      )}
    </NoHeaderFooterContainer>
  );
};

export default EditLessonEntryPage;
