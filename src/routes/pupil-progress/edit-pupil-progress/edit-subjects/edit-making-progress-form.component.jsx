import useShowSubject from "../../../../hooks/use-show-subject";

import SubjectButton from "../../../../components/subject-button/subject-button.component";
import GradeButtons from "./grade-buttons.component";
import Stars from "../../stars/stars.component";
import CurrentGradingInfo from "../../add-pupil-progress/current-grading-info.component";

import {
  SubjectsDiv,
  SubjectsInputsDiv,
  SliderDiv,
} from "../../../../styles/div/div.styles";
import {
  Label,
  StyledInput,
  StyledTextArea,
} from "../../../../styles/form/form.styles";
import { SubjectsHr } from "../../../../styles/hr/hr.styles";

import {
  placeholderInfiniteSpaceMessage,
  makingProgress,
} from "../../../../strings/strings";

const EditMakingProgressForm = ({ updatedEntry, handleChange }) => {
  const { showSubject, handleClick } = useShowSubject();
  const { makingProgressGrade, makingProgressNotes } = updatedEntry;

  return (
    <>
      <SubjectsHr />

      <SubjectsDiv>
        <GradeButtons
          subjectGrade={makingProgressGrade}
          buttonText={makingProgress}
          {...{ showSubject, handleClick }}
        />

        {showSubject && (
          <>
            <SubjectButton onClick={handleClick}>
              Hide {makingProgress}
            </SubjectButton>

            <SubjectsInputsDiv>
              <h2>{makingProgress}:</h2>
              <Stars grade={makingProgressGrade} />

              <SliderDiv>
                <CurrentGradingInfo />
                <StyledInput
                  type="range"
                  name="makingProgressGrade"
                  min="1"
                  max="5"
                  defaultValue={makingProgressGrade}
                  onChange={handleChange}
                />
              </SliderDiv>

              <Label>{makingProgress} Notes:</Label>
              <StyledTextArea
                defaultValue={makingProgressNotes}
                type="text"
                name="makingProgressNotes"
                onChange={handleChange}
                placeholder={placeholderInfiniteSpaceMessage}
              />
            </SubjectsInputsDiv>
          </>
        )}
      </SubjectsDiv>
    </>
  );
};

export default EditMakingProgressForm;
