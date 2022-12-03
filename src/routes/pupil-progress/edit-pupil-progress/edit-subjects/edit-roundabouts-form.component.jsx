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
  roundabouts,
} from "../../../../strings/strings";

const EditRoundaboutsForm = ({ updatedEntry, handleChange }) => {
  const { showSubject, handleClick } = useShowSubject();
  const { roundaboutsGrade, roundaboutsNotes } = updatedEntry;

  return (
    <>
      <SubjectsHr />

      <SubjectsDiv>
        <GradeButtons
          subjectGrade={roundaboutsGrade}
          buttonText={roundabouts}
          {...{ showSubject, handleClick }}
        />

        {showSubject && (
          <>
            <SubjectButton onClick={handleClick}>
              Hide {roundabouts}
            </SubjectButton>

            <SubjectsInputsDiv>
              <h2>{roundabouts}:</h2>
              <Stars grade={roundaboutsGrade} />

              <SliderDiv>
                <CurrentGradingInfo />
                <StyledInput
                  type="range"
                  name="roundaboutsGrade"
                  min="1"
                  max="5"
                  defaultValue={roundaboutsGrade}
                  onChange={handleChange}
                />
              </SliderDiv>

              <Label>{roundabouts} Notes:</Label>
              <StyledTextArea
                defaultValue={roundaboutsNotes}
                type="text"
                name="roundaboutsNotes"
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

export default EditRoundaboutsForm;
