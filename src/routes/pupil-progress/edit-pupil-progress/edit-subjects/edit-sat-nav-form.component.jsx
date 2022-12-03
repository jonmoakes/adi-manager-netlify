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
  satNav,
} from "../../../../strings/strings";

const EditSatNavForm = ({ updatedEntry, handleChange }) => {
  const { showSubject, handleClick } = useShowSubject();
  const { satGrade, satNotes } = updatedEntry;
  return (
    <>
      <SubjectsHr />

      <SubjectsDiv>
        <GradeButtons
          subjectGrade={satGrade}
          buttonText={satNav}
          {...{ showSubject, handleClick }}
        />

        {showSubject && (
          <>
            <SubjectButton onClick={handleClick}>Hide {satNav}</SubjectButton>

            <SubjectsInputsDiv>
              <h2>{satNav}:</h2>
              <Stars grade={satGrade} />

              <SliderDiv>
                <CurrentGradingInfo />
                <StyledInput
                  type="range"
                  name="satGrade"
                  min="1"
                  max="5"
                  defaultValue={satGrade}
                  onChange={handleChange}
                />
              </SliderDiv>

              <Label>{satNav} Notes:</Label>
              <StyledTextArea
                defaultValue={satNotes}
                type="text"
                name="satNotes"
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

export default EditSatNavForm;
