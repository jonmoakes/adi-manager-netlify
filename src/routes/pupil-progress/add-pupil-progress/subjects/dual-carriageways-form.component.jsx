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

const DualCarriagewaysForm = ({ entry, handleChange }) => {
  const { showSubject, handleClick } = useShowSubject();
  const { dcGrade, dcNotes } = entry;
  return (
    <>
      <SubjectsHr />

      <SubjectsDiv>
        <SubjectButton onClick={handleClick}>
          {!showSubject ? "Show" : "Hide"} Dual Carriageways
        </SubjectButton>

        {showSubject && (
          <SubjectsInputsDiv>
            <h2>Dual Carriageways:</h2>
            <Stars grade={dcGrade} />

            <SliderDiv>
              <CurrentGradingInfo />
              <StyledInput
                type="range"
                name="dcGrade"
                min="1"
                max="5"
                value={dcGrade || "1"}
                onChange={handleChange}
              />
            </SliderDiv>

            <Label>Dual Carriageways Notes:</Label>
            <StyledTextArea
              value={dcNotes || ""}
              type="text"
              name="dcNotes"
              onChange={handleChange}
              placeholder={placeholderInfiniteSpaceMessage}
            />
          </SubjectsInputsDiv>
        )}
      </SubjectsDiv>
    </>
  );
};

export default DualCarriagewaysForm;
