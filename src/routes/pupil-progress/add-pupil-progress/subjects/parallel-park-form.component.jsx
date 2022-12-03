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
  parallelPark,
} from "../../../../strings/strings";

const ParallelParkForm = ({ entry, handleChange }) => {
  const { showSubject, handleClick } = useShowSubject();
  const { pParkGrade, pParkNotes } = entry;
  return (
    <>
      <SubjectsHr />

      <SubjectsDiv>
        <SubjectButton onClick={handleClick}>
          {!showSubject ? "Show" : "Hide"} {parallelPark}
        </SubjectButton>

        {showSubject && (
          <SubjectsInputsDiv>
            <h2>{parallelPark}:</h2>
            <Stars grade={pParkGrade} />

            <SliderDiv>
              <CurrentGradingInfo />
              <StyledInput
                type="range"
                name="pParkGrade"
                min="1"
                max="5"
                value={pParkGrade || "1"}
                onChange={handleChange}
              />
            </SliderDiv>

            <Label>{parallelPark} Notes:</Label>
            <StyledTextArea
              value={pParkNotes || ""}
              type="text"
              name="pParkNotes"
              onChange={handleChange}
              placeholder={placeholderInfiniteSpaceMessage}
            />
          </SubjectsInputsDiv>
        )}
      </SubjectsDiv>
    </>
  );
};

export default ParallelParkForm;
