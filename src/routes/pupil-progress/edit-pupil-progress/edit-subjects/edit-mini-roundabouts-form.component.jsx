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
  miniRoundabouts,
} from "../../../../strings/strings";

const EditMiniRoundaboutsForm = ({ updatedEntry, handleChange }) => {
  const { showSubject, handleClick } = useShowSubject();
  const { miniRbGrade, miniRbNotes } = updatedEntry;
  return (
    <>
      <SubjectsHr />

      <SubjectsDiv>
        <GradeButtons
          subjectGrade={miniRbGrade}
          buttonText={miniRoundabouts}
          {...{ showSubject, handleClick }}
        />

        {showSubject && (
          <>
            <SubjectButton onClick={handleClick}>
              Hide {miniRoundabouts}
            </SubjectButton>

            <SubjectsInputsDiv>
              <h2>{miniRoundabouts}:</h2>
              <Stars grade={miniRbGrade} />

              <SliderDiv>
                <CurrentGradingInfo />
                <StyledInput
                  type="range"
                  name="miniRbGrade"
                  min="1"
                  max="5"
                  defaultValue={miniRbGrade}
                  onChange={handleChange}
                />
              </SliderDiv>

              <Label>{miniRoundabouts} Notes:</Label>
              <StyledTextArea
                defaultValue={miniRbNotes}
                type="text"
                name="miniRbNotes"
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

export default EditMiniRoundaboutsForm;
