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

const OneWayForm = ({ entry, handleChange }) => {
  const { showSubject, handleClick } = useShowSubject();
  const { oneWayGrade, oneWayNotes } = entry;
  return (
    <>
      <SubjectsHr />

      <SubjectsDiv>
        <SubjectButton onClick={handleClick}>
          {!showSubject ? "Show" : "Hide"} One Way Streets
        </SubjectButton>

        {showSubject && (
          <SubjectsInputsDiv>
            <h2>One Way Streets:</h2>
            <Stars grade={oneWayGrade} />

            <SliderDiv>
              <CurrentGradingInfo />
              <StyledInput
                type="range"
                name="oneWayGrade"
                min="1"
                max="5"
                value={oneWayGrade || "1"}
                onChange={handleChange}
              />
            </SliderDiv>

            <Label>One Way Streets Notes:</Label>
            <StyledTextArea
              value={oneWayNotes || ""}
              type="text"
              name="oneWayNotes"
              onChange={handleChange}
              placeholder={placeholderInfiniteSpaceMessage}
            />
          </SubjectsInputsDiv>
        )}
      </SubjectsDiv>
    </>
  );
};

export default OneWayForm;
