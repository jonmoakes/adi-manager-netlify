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

const MovingOffForm = ({ entry, handleChange }) => {
  const { showSubject, handleClick } = useShowSubject();
  const { movingOffGrade, movingOffNotes } = entry;

  return (
    <>
      <SubjectsHr />
      <SubjectsDiv>
        <SubjectButton onClick={handleClick}>
          {!showSubject ? "Show" : "Hide"} M/Off & Stopping
        </SubjectButton>

        {showSubject && (
          <SubjectsInputsDiv>
            <h2>Moving Off and stopping:</h2>
            <Stars grade={movingOffGrade} />

            <SliderDiv>
              <CurrentGradingInfo />
              <StyledInput
                type="range"
                name="movingOffGrade"
                min="1"
                max="5"
                value={movingOffGrade || "1"}
                onChange={handleChange}
              />
            </SliderDiv>

            <Label>Moving Off And Stopping Notes:</Label>
            <StyledTextArea
              value={movingOffNotes || ""}
              type="text"
              name="movingOffNotes"
              onChange={handleChange}
              placeholder={placeholderInfiniteSpaceMessage}
            />
          </SubjectsInputsDiv>
        )}
      </SubjectsDiv>
    </>
  );
};

export default MovingOffForm;
