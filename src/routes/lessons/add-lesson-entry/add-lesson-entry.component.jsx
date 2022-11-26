import { useSelector } from "react-redux";

import useHandleAddLessonEntryChange from "./use-handle-add-lesson-entry-change";

import { selectErrorMessage } from "../../../store/error/error.selector";

import FetchError from "../../../components/fetch-error/fetch-error.component";
import AddEntryHeading from "../../../components/add-entry-heading/add-entry-heading.component";

import AddLessonSaveReturnButtons from "./add-lesson-save-return-buttons.component";
import AddLessonEntryInstructions from "./add-lesson-instructions.component";
import AddLessonEntryForm from "./add-lesson-entry-form.component";

import { NoHeaderFooterContainer } from "../../../styles/container/container.styles";
import { AddEntryDiv } from "../../../styles/div/div.styles";

const AddLessonEntryPage = () => {
  const { entry, handleChange } = useHandleAddLessonEntryChange();
  const errorMessage = useSelector(selectErrorMessage);

  return (
    <NoHeaderFooterContainer>
      <>
        {errorMessage ? (
          <FetchError />
        ) : (
          <>
            <AddEntryHeading />
            <AddLessonSaveReturnButtons {...{ entry }} />
            <AddEntryDiv>
              <AddLessonEntryInstructions />
              <AddLessonEntryForm {...{ handleChange }} />
            </AddEntryDiv>
          </>
        )}
      </>
    </NoHeaderFooterContainer>
  );
};

export default AddLessonEntryPage;
