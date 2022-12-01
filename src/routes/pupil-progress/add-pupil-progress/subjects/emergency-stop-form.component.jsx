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

const EmergencyStopForm = ({ entry, handleChange }) => {
  const { showSubject, handleClick } = useShowSubject();
  const { stopGrade, stopNotes } = entry;
  return (
    <>
      <SubjectsHr />

      <SubjectsDiv>
        <SubjectButton onClick={handleClick}>
          {!showSubject ? "Show" : "Hide"} Emergency Stop
        </SubjectButton>

        {showSubject && (
          <SubjectsInputsDiv>
            <h2>Emergency Stop:</h2>
            <Stars grade={stopGrade} />

            <SliderDiv>
              <CurrentGradingInfo />
              <StyledInput
                type="range"
                name="stopGrade"
                min="1"
                max="5"
                value={stopGrade || "1"}
                onChange={handleChange}
              />
            </SliderDiv>

            <Label>Emergency Stop Notes:</Label>
            <StyledTextArea
              value={stopNotes || ""}
              type="text"
              name="stopNotes"
              onChange={handleChange}
              placeholder={placeholderInfiniteSpaceMessage}
            />
          </SubjectsInputsDiv>
        )}
      </SubjectsDiv>
    </>
  );
};

export default EmergencyStopForm;
