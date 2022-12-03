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
  pullUpRight,
} from "../../../../strings/strings";

const PullUpRightForm = ({ entry, handleChange }) => {
  const { showSubject, handleClick } = useShowSubject();
  const { pullGrade, pullNotes } = entry;
  return (
    <>
      <SubjectsHr />
      <SubjectsDiv>
        <SubjectButton onClick={handleClick}>
          {!showSubject ? "Show" : "Hide"} {pullUpRight}
        </SubjectButton>

        {showSubject && (
          <SubjectsInputsDiv>
            <h2>Pull Up On The Right:</h2>
            <Stars grade={pullGrade} />

            <SliderDiv>
              <CurrentGradingInfo />
              <StyledInput
                type="range"
                name="pullGrade"
                min="1"
                max="5"
                value={pullGrade || "1"}
                onChange={handleChange}
              />
            </SliderDiv>

            <Label>Pull Up On The Right Notes:</Label>
            <StyledTextArea
              value={pullNotes || ""}
              type="text"
              name="pullNotes"
              onChange={handleChange}
              placeholder={placeholderInfiniteSpaceMessage}
            />
          </SubjectsInputsDiv>
        )}
      </SubjectsDiv>
    </>
  );
};

export default PullUpRightForm;
