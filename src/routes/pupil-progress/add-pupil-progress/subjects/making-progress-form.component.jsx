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

const MakingProgressForm = ({ entry, handleChange }) => {
  const { showSubject, handleClick } = useShowSubject();
  const { makingProgressGrade, makingProgressNotes } = entry;
  return (
    <>
      <SubjectsHr />

      <SubjectsDiv>
        <SubjectButton onClick={handleClick}>
          {!showSubject ? "Show" : "Hide"} Making Progress
        </SubjectButton>

        {showSubject && (
          <SubjectsInputsDiv>
            <h2>Making Progress:</h2>
            <Stars grade={makingProgressGrade} />

            <SliderDiv>
              <CurrentGradingInfo />
              <StyledInput
                type="range"
                name="makingProgressGrade"
                min="1"
                max="5"
                value={makingProgressGrade || "1"}
                onChange={handleChange}
              />
            </SliderDiv>

            <Label>Making Progress Notes:</Label>
            <StyledTextArea
              value={makingProgressNotes || ""}
              type="text"
              name="makingProgressNotes"
              onChange={handleChange}
              placeholder={placeholderInfiniteSpaceMessage}
            />
          </SubjectsInputsDiv>
        )}
      </SubjectsDiv>
    </>
  );
};

export default MakingProgressForm;
