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
  forwardBayPark,
} from "../../../../strings/strings";

const EditForwardBayParkForm = ({ updatedEntry, handleChange }) => {
  const { showSubject, handleClick } = useShowSubject();
  const { fBayGrade, fBayNotes } = updatedEntry;
  return (
    <>
      <SubjectsHr />

      <SubjectsDiv>
        <GradeButtons
          subjectGrade={fBayGrade}
          buttonText={forwardBayPark}
          {...{ showSubject, handleClick }}
        />

        {showSubject && (
          <>
            <SubjectButton onClick={handleClick}>
              Hide {forwardBayPark}
            </SubjectButton>

            <SubjectsInputsDiv>
              <h2>{forwardBayPark}:</h2>
              <Stars grade={fBayGrade} />

              <SliderDiv>
                <CurrentGradingInfo />
                <StyledInput
                  type="range"
                  name="fBayGrade"
                  min="1"
                  max="5"
                  defaultValue={fBayGrade}
                  onChange={handleChange}
                />
              </SliderDiv>

              <Label>{forwardBayPark} Notes:</Label>
              <StyledTextArea
                defaultValue={fBayNotes}
                type="text"
                name="fBayNotes"
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

export default EditForwardBayParkForm;
