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
  emerging,
} from "../../../../strings/strings";

const EditEmergingForm = ({ updatedEntry, handleChange }) => {
  const { showSubject, handleClick } = useShowSubject();
  const { emergingGrade, emergingNotes } = updatedEntry;

  return (
    <>
      <SubjectsHr />
      <SubjectsDiv>
        <GradeButtons
          subjectGrade={emergingGrade}
          buttonText={emerging}
          {...{ showSubject, handleClick }}
        />

        {showSubject && (
          <>
            <SubjectButton onClick={handleClick}>Hide {emerging}</SubjectButton>

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
                  defaultValue={emergingGrade}
                  onChange={handleChange}
                />
              </SliderDiv>

              <Label>{emerging} Notes:</Label>
              <StyledTextArea
                defaultValue={emergingNotes}
                type="text"
                name="emergingNotes"
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

export default EditEmergingForm;
