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
  pedestrianCrossings,
} from "../../../../strings/strings";

const PedestrianCrossingsForm = ({ entry, handleChange }) => {
  const { showSubject, handleClick } = useShowSubject();
  const { pedXGrade, pedXNotes } = entry;
  return (
    <>
      <SubjectsHr />

      <SubjectsDiv>
        <SubjectButton onClick={handleClick}>
          {!showSubject ? "Show" : "Hide"} {pedestrianCrossings}
        </SubjectButton>

        {showSubject && (
          <SubjectsInputsDiv>
            <h2>{pedestrianCrossings}:</h2>
            <Stars grade={pedXGrade} />

            <SliderDiv>
              <CurrentGradingInfo />
              <StyledInput
                type="range"
                name="pedXGrade"
                min="1"
                max="5"
                value={pedXGrade || "1"}
                onChange={handleChange}
              />
            </SliderDiv>

            <Label>{pedestrianCrossings} Notes:</Label>
            <StyledTextArea
              value={pedXNotes || ""}
              type="text"
              name="pedXNotes"
              onChange={handleChange}
              placeholder={placeholderInfiniteSpaceMessage}
            />
          </SubjectsInputsDiv>
        )}
      </SubjectsDiv>
    </>
  );
};

export default PedestrianCrossingsForm;
