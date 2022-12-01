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
  adequateClearance,
} from "../../../../strings/strings";

const EditAdequateClearanceForm = ({ updatedEntry, handleChange }) => {
  const { showSubject, handleClick } = useShowSubject();
  const { adequateGrade, adequateNotes } = updatedEntry;

  return (
    <>
      <SubjectsHr />

      <SubjectsDiv>
        <GradeButtons
          subjectGrade={adequateGrade}
          buttonText={adequateClearance}
          {...{ showSubject, handleClick }}
        />

        {showSubject && (
          <>
            <SubjectButton onClick={handleClick}>
              hide {adequateClearance}
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
