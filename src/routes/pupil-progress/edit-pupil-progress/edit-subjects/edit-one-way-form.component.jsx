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
  oneWayStreets,
} from "../../../../strings/strings";

const EditOneWayForm = ({ updatedEntry, handleChange }) => {
  const { showSubject, handleClick } = useShowSubject();
  const { oneWayGrade, oneWayNotes } = updatedEntry;

  return (
    <>
      <SubjectsHr />

      <SubjectsDiv>
        <GradeButtons
          subjectGrade={oneWayGrade}
          buttonText={oneWayStreets}
          {...{ showSubject, handleClick }}
        />

        {showSubject && (
          <>
            <SubjectButton onClick={handleClick}>
              Hide {oneWayStreets}
            </SubjectButton>

            <SubjectsInputsDiv>
              <h2>{oneWayStreets}:</h2>
              <Stars grade={oneWayGrade} />

              <SliderDiv>
                <CurrentGradingInfo />
                <StyledInput
                  type="range"
                  name="oneWayGrade"
                  min="1"
                  max="5"
                  defaultValue={oneWayGrade}
                  onChange={handleChange}
                />
              </SliderDiv>

              <Label>{oneWayStreets} Notes:</Label>
              <StyledTextArea
                defaultValue={oneWayNotes}
                type="text"
                name="oneWayNotes"
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

export default EditOneWayForm;
