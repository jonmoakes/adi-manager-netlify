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

import {
  placeholderInfiniteSpaceMessage,
  turningLeft,
} from "../../../../strings/strings";

const TurningLeftForm = ({ entry, handleChange }) => {
  const { showSubject, handleClick } = useShowSubject();
  const { turningLeftGrade, turningLeftNotes } = entry;

  return (
    <>
      <SubjectsHr />
      <SubjectsDiv>
        <SubjectButton onClick={handleClick}>
          {!showSubject ? "Show" : "Hide"} {turningLeft}
        </SubjectButton>

        {showSubject && (
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
                value={turningLeftGrade || "1"}
                onChange={handleChange}
              />
            </SliderDiv>

            <Label>{turningLeft} Notes:</Label>
            <StyledTextArea
              value={turningLeftNotes || ""}
              type="text"
              name="turningLeftNotes"
              onChange={handleChange}
              placeholder={placeholderInfiniteSpaceMessage}
            />
          </SubjectsInputsDiv>
        )}
      </SubjectsDiv>
    </>
  );
};

export default TurningLeftForm;
