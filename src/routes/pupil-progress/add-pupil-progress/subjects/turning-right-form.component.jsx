import useShowSubject from "../../../../hooks/use-show-subject";

import SubjectButton from "../../../../components/subject-button/subject-button.component";
import Stars from "../../stars/stars.component";
import CurrentGradingInfo from "../current-grading-info.component";

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

const TurningRightForm = ({ entry, handleChange }) => {
  const { showSubject, handleClick } = useShowSubject();
  const { turningRightGrade, turningRightNotes } = entry;
  return (
    <>
      <SubjectsHr />
      <SubjectsDiv>
        <SubjectButton onClick={handleClick}>
          {!showSubject ? "Show" : "Hide"} Junctions - Right
        </SubjectButton>

        {showSubject && (
          <SubjectsInputsDiv>
            <h2>Junctions - Turning Right:</h2>
            <Stars grade={turningRightGrade} />

            <SliderDiv>
              <CurrentGradingInfo />
              <StyledInput
                type="range"
                name="turningRightGrade"
                min="1"
                max="5"
                value={turningRightGrade || "1"}
                onChange={handleChange}
              />
            </SliderDiv>

            <Label>Junctions - Turning Right Notes:</Label>
            <StyledTextArea
              value={turningRightNotes || ""}
              type="text"
              name="turningRightNotes"
              onChange={handleChange}
              placeholder={placeholderInfiniteSpaceMessage}
            />
          </SubjectsInputsDiv>
        )}
      </SubjectsDiv>
    </>
  );
};

export default TurningRightForm;
