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
  cockpitDrill,
} from "../../../../strings/strings";

const EditCockpitDrillForm = ({ updatedEntry, handleChange }) => {
  const { showSubject, handleClick } = useShowSubject();
  const { cockpitDrillGrade, cockpitDrillNotes } = updatedEntry;

  return (
    <>
      <SubjectsHr />

      <SubjectsDiv>
        <GradeButtons
          subjectGrade={cockpitDrillGrade}
          buttonText={cockpitDrill}
          {...{ showSubject, handleClick }}
        />

        {showSubject && (
          <>
            <SubjectButton onClick={handleClick}>
              Hide {cockpitDrill}
            </SubjectButton>

            <SubjectsInputsDiv>
              <h2>{cockpitDrill}:</h2>

              <Stars grade={cockpitDrillGrade} />

              <SliderDiv>
                <CurrentGradingInfo />
                <StyledInput
                  type="range"
                  name="cockpitDrillGrade"
                  min="1"
                  max="5"
                  defaultValue={cockpitDrillGrade}
                  onChange={handleChange}
                />
              </SliderDiv>

              <Label>Cockpit Drill Notes</Label>
              <StyledTextArea
                defaultValue={cockpitDrillNotes}
                type="text"
                name="cockpitDrillNotes"
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

export default EditCockpitDrillForm;
