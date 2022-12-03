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
  emerging,
} from "../../../../strings/strings";

const EmergingForm = ({ entry, handleChange }) => {
  const { showSubject, handleClick } = useShowSubject();
  const { emergingGrade, emergingNotes } = entry;
  return (
    <>
      <SubjectsHr />

      <SubjectsDiv>
        <SubjectButton onClick={handleClick}>
          {!showSubject ? "Show" : "Hide"} {emerging}
        </SubjectButton>

        {showSubject && (
          <SubjectsInputsDiv>
            <h2>{emerging}:</h2>
            <Stars grade={emergingGrade} />

            <SliderDiv>
              <CurrentGradingInfo />

              <StyledInput
                type="range"
                name="emergingGrade"
                min="1"
                max="5"
                value={emergingGrade || "1"}
                onChange={handleChange}
              />
            </SliderDiv>

            <Label>{emerging} Notes:</Label>
            <StyledTextArea
              value={emergingNotes || ""}
              type="text"
              name="emergingNotes"
              onChange={handleChange}
              placeholder={placeholderInfiniteSpaceMessage}
            />
          </SubjectsInputsDiv>
        )}
      </SubjectsDiv>
    </>
  );
};

export default EmergingForm;
