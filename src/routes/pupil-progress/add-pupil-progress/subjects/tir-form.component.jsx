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

const TirForm = ({ entry, handleChange }) => {
  const { showSubject, handleClick } = useShowSubject();
  const { tirGrade, tirNotes } = entry;
  return (
    <>
      <SubjectsHr />

      <SubjectsDiv>
        <SubjectButton onClick={handleClick}>
          {!showSubject ? "Show" : "Hide"} Turn In The Road
        </SubjectButton>

        {showSubject && (
          <SubjectsInputsDiv>
            <h2>Turn In The Road:</h2>
            <Stars grade={tirGrade} />

            <SliderDiv>
              <CurrentGradingInfo />
              <StyledInput
                type="range"
                name="tirGrade"
                min="1"
                max="5"
                value={tirGrade || "1"}
                onChange={handleChange}
              />
            </SliderDiv>

            <Label>Turn In The Road Notes:</Label>
            <StyledTextArea
              value={tirNotes || ""}
              type="text"
              name="tirNotes"
              onChange={handleChange}
              placeholder={placeholderInfiniteSpaceMessage}
            />
          </SubjectsInputsDiv>
        )}
      </SubjectsDiv>
    </>
  );
};

export default TirForm;
