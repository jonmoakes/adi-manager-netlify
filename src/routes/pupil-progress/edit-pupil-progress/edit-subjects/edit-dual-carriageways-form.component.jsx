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
  dualCarriageways,
} from "../../../../strings/strings";

const EditDualCarriagewaysForm = ({ updatedEntry, handleChange }) => {
  const { showSubject, handleClick } = useShowSubject();
  const { dcGrade, dcNotes } = updatedEntry;

  return (
    <>
      <SubjectsHr />

      <SubjectsDiv>
        <GradeButtons
          subjectGrade={dcGrade}
          buttonText={dualCarriageways}
          {...{ showSubject, handleClick }}
        />

        {showSubject && (
          <>
            <SubjectButton onClick={handleClick}>
              Hide {dualCarriageways}
            </SubjectButton>

            <SubjectsInputsDiv>
              <h2>{dualCarriageways}:</h2>
              <Stars grade={dcGrade} />

              <SliderDiv>
                <CurrentGradingInfo />
                <StyledInput
                  type="range"
                  name="dcGrade"
                  min="1"
                  max="5"
                  defaultValue={dcGrade}
                  onChange={handleChange}
                />
              </SliderDiv>

              <Label>Dual Carriageways Notes:</Label>
              <StyledTextArea
                defaultValue={dcNotes}
                type="text"
                name="dcNotes"
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

export default EditDualCarriagewaysForm;
