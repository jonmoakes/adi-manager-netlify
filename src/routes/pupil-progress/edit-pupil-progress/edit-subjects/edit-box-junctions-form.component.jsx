import useShowSubject from "../../../../hooks/use-show-subject";

import SubjectButton from "../../../../components/subject-button/subject-button.component";
import GradeButtons from "./grade-buttons.component";
import Stars from "../../stars/stars.component";
import CurrentGradingInfo from "../../add-pupil-progress/current-grading-info.component";

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
  boxJunctions,
} from "../../../../strings/strings";

const EditBoxJunctionsForm = ({ updatedEntry, handleChange }) => {
  const { showSubject, handleClick } = useShowSubject();
  const { boxJunctionsGrade, boxJunctionsNotes } = updatedEntry;
  return (
    <>
      <SubjectsHr />

      <SubjectsDiv>
        <GradeButtons
          subjectGrade={boxJunctionsGrade}
          buttonText={boxJunctions}
          {...{ showSubject, handleClick }}
        />

        {showSubject && (
          <>
            <SubjectButton onClick={handleClick}>
              Hide {boxJunctions}
            </SubjectButton>

            <SubjectsInputsDiv>
              <h2>Box Junctions:</h2>
              <Stars grade={boxJunctionsGrade} />

              <SliderDiv>
                <CurrentGradingInfo />
                <StyledInput
                  className="slider"
                  type="range"
                  name="boxJunctionsGrade"
                  min="1"
                  max="5"
                  defaultValue={boxJunctionsGrade}
                  onChange={handleChange}
                />
              </SliderDiv>

              <Label>Box Junctions Notes:</Label>
              <StyledTextArea
                defaultValue={boxJunctionsNotes}
                type="text"
                name="boxJunctionsNotes"
                onChange={handleChange}
                placeholder={placeholderInfiniteSpaceMessage}
              />
            </SubjectsInputsDiv>
          </>
        )}
      </SubjectsDiv>
    </>
  );
};

export default EditBoxJunctionsForm;
