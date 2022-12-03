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
  trafficLights,
} from "../../../../strings/strings";

const EditTrafficLightsForm = ({ updatedEntry, handleChange }) => {
  const { showSubject, handleClick } = useShowSubject();
  const { tlGrade, tlNotes } = updatedEntry;

  return (
    <>
      <SubjectsHr />

      <SubjectsDiv>
        <GradeButtons
          subjectGrade={tlGrade}
          buttonText={trafficLights}
          {...{ showSubject, handleClick }}
        />

        {showSubject && (
          <>
            <SubjectButton onClick={handleClick}>
              Hide {trafficLights}
            </SubjectButton>

            <SubjectsInputsDiv>
              <h2>{trafficLights}:</h2>
              <Stars grade={tlGrade} />

              <SliderDiv>
                <CurrentGradingInfo />
                <StyledInput
                  type="range"
                  name="tlGrade"
                  min="1"
                  max="5"
                  defaultValue={tlGrade}
                  onChange={handleChange}
                />
              </SliderDiv>

              <Label>Traffic Lights Notes:</Label>
              <StyledTextArea
                defaultValue={tlNotes}
                type="text"
                name="tlNotes"
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

export default EditTrafficLightsForm;
