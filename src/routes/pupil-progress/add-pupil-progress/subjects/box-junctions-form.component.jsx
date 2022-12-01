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

const BoxJunctionsForm = ({ entry, handleChange }) => {
  const { showSubject, handleClick } = useShowSubject();
  const { boxJunctionsGrade, boxJunctionsNotes } = entry;
  return (
    <>
      <SubjectsHr />
      <SubjectsDiv>
        <SubjectButton onClick={handleClick}>
          {!showSubject ? "Show" : "Hide"} Box Junctions
        </SubjectButton>

        {showSubject && (
          <SubjectsInputsDiv>
            <h2>Box Junctions:</h2>
            <Stars grade={boxJunctionsGrade} />

            <SliderDiv>
              <CurrentGradingInfo />
              <StyledInput
                type="range"
                name="boxJunctionsGrade"
                min="1"
                max="5"
                value={boxJunctionsGrade || "1"}
                onChange={handleChange}
              />
            </SliderDiv>

            <Label>Box Junctions Notes:</Label>
            <StyledTextArea
              value={boxJunctionsNotes || ""}
              type="text"
              name="boxJunctionsNotes"
              onChange={handleChange}
              placeholder={placeholderInfiniteSpaceMessage}
            />
          </SubjectsInputsDiv>
        )}
      </SubjectsDiv>
    </>
  );
};

export default BoxJunctionsForm;
