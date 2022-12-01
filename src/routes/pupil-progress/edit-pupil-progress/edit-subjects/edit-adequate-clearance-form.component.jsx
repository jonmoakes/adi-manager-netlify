import useShowSubject from "../../../../hooks/use-show-subject";

import SubjectButton from "../../../../components/subject-button/subject-button.component";
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

import { placeholderInfiniteSpaceMessage } from "../../../../strings/strings";

import { isGradeOne, isGradeTwoToFour, isGradeFive } from "./grade-check";

const EditAdequateClearanceForm = ({ updatedEntry, handleChange }) => {
  const { showSubject, handleClick } = useShowSubject();
  const { adequateGrade, adequateNotes } = updatedEntry;

  return (
    <>
      <SubjectsHr />

      <SubjectsDiv>
        {isGradeOne(showSubject, adequateGrade) && (
          <SubjectButton isGrade1 onClick={handleClick}>
            Show adequate clearance
          </SubjectButton>
        )}

        {isGradeTwoToFour(showSubject, adequateGrade) && (
          <SubjectButton isGrade2To4 onClick={handleClick}>
            Show adequate clearance
          </SubjectButton>
        )}

        {isGradeFive(showSubject, adequateGrade) && (
          <SubjectButton isGrade5 onClick={handleClick}>
            Show adequate clearance
          </SubjectButton>
        )}

        {showSubject && (
          <>
            <SubjectButton onClick={handleClick}>
              hide adequate clearance
            </SubjectButton>

            <SubjectsInputsDiv>
              <h2>Adequate Clearance:</h2>
              <Stars grade={adequateGrade} />

              <SliderDiv>
                <CurrentGradingInfo />
                <StyledInput
                  type="range"
                  name="adequateGrade"
                  min="1"
                  max="5"
                  defaultValue={adequateGrade}
                  onChange={handleChange}
                />
              </SliderDiv>

              <Label>Adequate Clearance Notes:</Label>
              <StyledTextArea
                value={adequateNotes}
                type="text"
                name="adequateNotes"
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

export default EditAdequateClearanceForm;
