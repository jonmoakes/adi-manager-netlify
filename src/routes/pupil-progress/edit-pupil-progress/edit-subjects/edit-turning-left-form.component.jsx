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
  turningLeft,
} from "../../../../strings/strings";

const EditTurningLeftForm = ({ updatedEntry, handleChange }) => {
  const { showSubject, handleClick } = useShowSubject();
  const { turningLeftGrade, turningLeftNotes } = updatedEntry;

  return (
    <>
      <SubjectsHr />

      <SubjectsDiv>
        <GradeButtons
          subjectGrade={turningLeftGrade}
          buttonText={turningLeft}
          {...{ showSubject, handleClick }}
        />

        {showSubject && (
          <>
            <SubjectButton onClick={handleClick}>
              Hide {turningLeft}
            </SubjectButton>

            <SubjectsInputsDiv>
              <h2>{turningLeft}:</h2>
              <Stars grade={turningLeftGrade} />

              <SliderDiv>
                <CurrentGradingInfo />
                <StyledInput
                  type="range"
                  name="turningLeftGrade"
                  min="1"
                  max="5"
                  defaultValue={turningLeftGrade}
                  onChange={handleChange}
                />
              </SliderDiv>

              <Label>{turningLeft} Notes:</Label>
              <StyledTextArea
                defaultValue={turningLeftNotes}
                type="text"
                name="turningLeftNotes"
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

export default EditTurningLeftForm;
