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
  meetingTraffic,
} from "../../../../strings/strings";

const EditMeetingTrafficForm = ({ updatedEntry, handleChange }) => {
  const { showSubject, handleClick } = useShowSubject();
  const { meetingGrade, meetingNotes } = updatedEntry;

  return (
    <>
      <SubjectsHr />

      <SubjectsDiv>
        <GradeButtons
          subjectGrade={meetingGrade}
          buttonText={meetingTraffic}
          {...{ showSubject, handleClick }}
        />

        {showSubject && (
          <>
            <SubjectButton onClick={handleClick}>
              Hide {meetingTraffic}
            </SubjectButton>

            <SubjectsInputsDiv>
              <h2>{meetingTraffic}:</h2>
              <Stars grade={meetingGrade} />

              <SliderDiv>
                <CurrentGradingInfo />
                <StyledInput
                  type="range"
                  name="meetingGrade"
                  min="1"
                  max="5"
                  defaultValue={meetingGrade}
                  onChange={handleChange}
                />
              </SliderDiv>

              <Label>{meetingTraffic} Notes:</Label>
              <StyledTextArea
                defaultValue={meetingNotes}
                type="text"
                name="meetingNotes"
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

export default EditMeetingTrafficForm;
