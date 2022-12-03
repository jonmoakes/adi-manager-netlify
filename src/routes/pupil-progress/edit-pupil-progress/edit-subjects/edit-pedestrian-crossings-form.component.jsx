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
  pedestrianCrossings,
} from "../../../../strings/strings";

const EditPedestrianCrossingsForm = ({ updatedEntry, handleChange }) => {
  const { showSubject, handleClick } = useShowSubject();
  const { pedXGrade, pedXNotes } = updatedEntry;
  return (
    <>
      <SubjectsHr />

      <SubjectsDiv>
        <GradeButtons
          subjectGrade={pedXGrade}
          buttonText={pedestrianCrossings}
          {...{ showSubject, handleClick }}
        />

        {showSubject && (
          <>
            <SubjectButton onClick={handleClick}>
              Hide {pedestrianCrossings}
            </SubjectButton>

            <SubjectsInputsDiv>
              <h2>{pedestrianCrossings}:</h2>
              <Stars grade={pedXGrade} />

              <SliderDiv>
                <CurrentGradingInfo />
                <StyledInput
                  type="range"
                  name="pedXGrade"
                  min="1"
                  max="5"
                  defaultValue={pedXGrade}
                  onChange={handleChange}
                />
              </SliderDiv>

              <Label>Pedestrian Crossings Notes:</Label>
              <StyledTextArea
                defaultValue={pedXNotes}
                type="text"
                name="pedXNotes"
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

export default EditPedestrianCrossingsForm;
