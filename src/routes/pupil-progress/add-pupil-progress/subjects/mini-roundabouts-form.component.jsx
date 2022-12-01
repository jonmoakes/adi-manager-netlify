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

const MiniRoundaboutsForm = ({ entry, handleChange }) => {
  const { showSubject, handleClick } = useShowSubject();
  const { miniRbGrade, miniRbNotes } = entry;
  return (
    <>
      <SubjectsHr />
      <SubjectsDiv>
        <SubjectButton onClick={handleClick}>
          {!showSubject ? "Show" : "Hide"} Mini Roundabouts
        </SubjectButton>

        {showSubject && (
          <SubjectsInputsDiv>
            <h2>Mini Roundabouts:</h2>
            <Stars grade={miniRbGrade} />

            <SliderDiv>
              <CurrentGradingInfo />
              <StyledInput
                type="range"
                name="miniRbGrade"
                min="1"
                max="5"
                value={miniRbGrade || "1"}
                onChange={handleChange}
              />
            </SliderDiv>

            <Label>Mini Roundabouts Notes:</Label>
            <StyledTextArea
              value={miniRbNotes || ""}
              type="text"
              name="miniRbNotes"
              onChange={handleChange}
              placeholder={placeholderInfiniteSpaceMessage}
            />
          </SubjectsInputsDiv>
        )}
      </SubjectsDiv>
    </>
  );
};

export default MiniRoundaboutsForm;
