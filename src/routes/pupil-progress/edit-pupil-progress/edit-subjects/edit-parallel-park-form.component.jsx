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
  parallelPark,
} from "../../../../strings/strings";

const EditParallelParkForm = ({ updatedEntry, handleChange }) => {
  const { showSubject, handleClick } = useShowSubject();
  const { pParkGrade, pParkNotes } = updatedEntry;
  return (
    <>
      <SubjectsHr />

      <SubjectsDiv>
        <GradeButtons
          subjectGrade={pParkGrade}
          buttonText={parallelPark}
          {...{ showSubject, handleClick }}
        />

        {showSubject && (
          <>
            <SubjectButton onClick={handleClick}>
              Hide {parallelPark}
            </SubjectButton>

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
                  defaultValue={pParkGrade}
                  onChange={handleChange}
                />
              </SliderDiv>

              <Label>{parallelPark} Notes:</Label>
              <StyledTextArea
                defaultValue={pParkNotes}
                type="text"
                name="pParkNotes"
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

export default EditParallelParkForm;
