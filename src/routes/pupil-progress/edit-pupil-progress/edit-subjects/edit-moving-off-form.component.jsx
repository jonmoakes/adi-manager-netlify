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
  movingOffandStopping,
} from "../../../../strings/strings";

const EditMovingOffForm = ({ updatedEntry, handleChange }) => {
  const { showSubject, handleClick } = useShowSubject();
  const { movingOffGrade, movingOffNotes } = updatedEntry;

  return (
    <>
      <SubjectsHr />
      <SubjectsDiv>
        <GradeButtons
          subjectGrade={movingOffGrade}
          buttonText={movingOffandStopping}
          {...{ showSubject, handleClick }}
        />

        {showSubject && (
          <>
            <SubjectButton onClick={handleClick}>
              Hide {movingOffandStopping}
            </SubjectButton>

            <SubjectsInputsDiv>
              <h2>{movingOffandStopping}:</h2>
              <Stars grade={movingOffGrade} />

              <SliderDiv>
                <CurrentGradingInfo />
                <StyledInput
                  type="range"
                  name="movingOffGrade"
                  min="1"
                  max="5"
                  defaultValue={movingOffGrade}
                  onChange={handleChange}
                />
              </SliderDiv>

              <Label>{movingOffandStopping} Notes:</Label>
              <StyledTextArea
                defaultValue={movingOffNotes}
                type="text"
                name="movingOffNotes"
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

export default EditMovingOffForm;
