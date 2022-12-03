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
  turningRight,
} from "../../../../strings/strings";

const EditTurningRightForm = ({ updatedEntry, handleChange }) => {
  const { showSubject, handleClick } = useShowSubject();
  const { turningRightGrade, turningRightNotes } = updatedEntry;

  return (
    <>
      <SubjectsHr />

      <SubjectsDiv>
        <GradeButtons
          subjectGrade={turningRightGrade}
          buttonText={turningRight}
          {...{ showSubject, handleClick }}
        />

        {showSubject && (
          <>
            <SubjectButton onClick={handleClick}>
              Hide {turningRight}
            </SubjectButton>

            <SubjectsInputsDiv>
              <h2>{turningRight}:</h2>
              <Stars grade={turningRightGrade} />

              <SliderDiv>
                <CurrentGradingInfo />
                <StyledInput
                  type="range"
                  name="turningRightGrade"
                  min="1"
                  max="5"
                  defaultValue={turningRightGrade}
                  onChange={handleChange}
                />
              </SliderDiv>

              <Label>Junctions - Turning Right Notes:</Label>
              <StyledTextArea
                defaultValue={turningRightNotes}
                type="text"
                name="turningRightNotes"
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

export default EditTurningRightForm;
