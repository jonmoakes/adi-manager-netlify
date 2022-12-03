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
  independentDriving,
} from "../../../../strings/strings";

const IndependentDrivingForm = ({ entry, handleChange }) => {
  const { showSubject, handleClick } = useShowSubject();
  const { indyGrade, indyNotes } = entry;
  return (
    <>
      <SubjectsHr />

      <SubjectsDiv>
        <SubjectButton onClick={handleClick}>
          {!showSubject ? "Show" : "Hide"} {independentDriving}
        </SubjectButton>

        {showSubject && (
          <SubjectsInputsDiv>
            <h2>{independentDriving}:</h2>
            <Stars grade={indyGrade} />

            <SliderDiv>
              <CurrentGradingInfo />
              <StyledInput
                type="range"
                name="indyGrade"
                min="1"
                max="5"
                value={indyGrade || "1"}
                onChange={handleChange}
              />
            </SliderDiv>

            <Label>{independentDriving} Notes:</Label>
            <StyledTextArea
              value={indyNotes || ""}
              type="text"
              name="indyNotes"
              onChange={handleChange}
              placeholder={placeholderInfiniteSpaceMessage}
            />
          </SubjectsInputsDiv>
        )}
      </SubjectsDiv>
    </>
  );
};

export default IndependentDrivingForm;
