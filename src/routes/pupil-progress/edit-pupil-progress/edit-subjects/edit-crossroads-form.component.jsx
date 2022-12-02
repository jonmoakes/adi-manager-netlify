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
  crossroads,
} from "../../../../strings/strings";

const EditCrossroadsForm = ({ updatedEntry, handleChange }) => {
  const { showSubject, handleClick } = useShowSubject();
  const { crossroadsGrade, crossroadsNotes } = updatedEntry;

  return (
    <>
      <SubjectsHr />

      <SubjectsDiv>
        <GradeButtons
          subjectGrade={crossroadsGrade}
          buttonText={crossroads}
          {...{ showSubject, handleClick }}
        />

        {showSubject && (
          <>
            <SubjectButton onClick={handleClick}>
              Hide {crossroads}
            </SubjectButton>

            <SubjectsInputsDiv>
              <h2>{crossroads}:</h2>

              <Stars grade={crossroadsGrade} />

              <SliderDiv>
                <CurrentGradingInfo />
                <StyledInput
                  type="range"
                  name="crossroadsGrade"
                  min="1"
                  max="5"
                  defaultValue={crossroadsGrade}
                  onChange={handleChange}
                />
              </SliderDiv>

              <Label>Junctions - Crossroads Notes:</Label>
              <StyledTextArea
                defaultValue={crossroadsNotes}
                type="text"
                name="crossroadsNotes"
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

export default EditCrossroadsForm;
