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
  adequateClearance,
} from "../../../../strings/strings";

const AdequateClearanceForm = ({ entry, handleChange }) => {
  const { showSubject, handleClick } = useShowSubject();
  const { adequateGrade, adequateNotes } = entry;
  return (
    <>
      <SubjectsHr />

      <SubjectsDiv>
        <SubjectButton onClick={handleClick}>
          {!showSubject ? "Show" : "Hide"} {adequateClearance}
        </SubjectButton>

        {showSubject && (
          <SubjectsInputsDiv>
            <h2>{adequateClearance}:</h2>
            <Stars grade={adequateGrade} />

            <SliderDiv>
              <CurrentGradingInfo />
              <StyledInput
                type="range"
                name="adequateGrade"
                min="1"
                max="5"
                value={adequateGrade || "1"}
                onChange={handleChange}
              />
            </SliderDiv>

            <Label>{adequateClearance} Notes:</Label>
            <StyledTextArea
              value={adequateNotes || ""}
              type="text"
              name="adequateNotes"
              onChange={handleChange}
              placeholder={placeholderInfiniteSpaceMessage}
            />
          </SubjectsInputsDiv>
        )}
      </SubjectsDiv>
    </>
  );
};

export default AdequateClearanceForm;
