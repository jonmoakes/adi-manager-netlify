import { useSelector } from "react-redux";
import { selectErrorMessage } from "../../../store/error/error.selector";

import useHandleUpdatedLessonEntryChange from "./use-handle-updated-lesson-entry-change";

import FetchError from "../../../components/fetch-error/fetch-error.component";
import EditEntryHeading from "../../../components/edit-entry-heading/edit-entry-heading.component";
import EditLessonEntrySaveReturnButtons from "./edit-lesson-entry-save-return-buttons.component";
import UpdateEntryInfo from "../../../components/tables/update-entry-info.component";
import EditLessonEntryForm from "./edit-lesson-entry-form.component";
import EmailEntryButtons from "../../../components/email-entry-buttons/email-entry-buttons.component";

import { NoHeaderFooterContainer } from "../../../styles/container/container.styles";
import { DataDiv } from "../../../styles/div/div.styles";

const EditLessonEntryPage = () => {
  const {
    handleChange,
    entry,
    updatedEntry,
    formattedLessonDate,
    formattedNextLessonDate,
  } = useHandleUpdatedLessonEntryChange();
  const errorMessage = useSelector(selectErrorMessage);

  const emailBody = `Hi,%0D%0A%0D%0AHere%20Are%20The%20Details%20Of%20Your%20Driving%20Lesson%20On%20${formattedLessonDate}.%0D%0A%0D%0AName:%0D%0A${entry.name}%0D%0A%0D%0AStart%20Time:%0D%0A${entry.startTime}%0D%0A%0D%0AEnd%20Time:%0D%0A${entry.endTime}%0D%0A%0D%0ALesson%20Paid%20For:%0D%0A${entry.paid}%0D%0A%0D%0ALesson%20Summary:%0D%0A${entry.lessonSummary}%0D%0A%0D%0ANext%20Lesson%20Plan:%0D%0A${entry.nextLessonPlan}%0D%0A%0D%0ANext%20Lesson%20Date:%0D%0A${formattedNextLessonDate}%0D%0A%0D%0ANext%20Lesson%20Time:%0D%0A${entry.nextLessonTime}%0D%0A%0D%0ANext%20Lesson%20Pickup:%0D%0A${entry.nextLessonPickup}%0D%0A%0D%0AKind%20Regards,`;

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
            <EmailEntryButtons {...{ entry, emailBody }} />
          </DataDiv>
        </>
      )}
    </NoHeaderFooterContainer>
  );
};

export default EditLessonEntryPage;
