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

const CrossroadsForm = ({ entry, handleChange }) => {
  const { showSubject, handleClick } = useShowSubject();
  const { crossroadsGrade, crossroadsNotes } = entry;
  return (
    <>
      <SubjectsHr />

      <SubjectsDiv>
        <SubjectButton onClick={handleClick}>
          {!showSubject ? "Show" : "Hide"} Junctions - crossroads
        </SubjectButton>

        {showSubject && (
          <SubjectsInputsDiv>
            <h2>Junctions - Crossroads:</h2>
            <Stars grade={crossroadsGrade} />

            <SliderDiv>
              <CurrentGradingInfo />
              <StyledInput
                type="range"
                name="crossroadsGrade"
                min="1"
                max="5"
                value={crossroadsGrade || "1"}
                onChange={handleChange}
              />
            </SliderDiv>

            <Label>Junctions - Crossroads Notes:</Label>
            <StyledTextArea
              value={crossroadsNotes || ""}
              type="text"
              name="crossroadsNotes"
              onChange={handleChange}
              placeholder={placeholderInfiniteSpaceMessage}
            />
          </SubjectsInputsDiv>
        )}
      </SubjectsDiv>
    </>
  );
};

export default CrossroadsForm;
