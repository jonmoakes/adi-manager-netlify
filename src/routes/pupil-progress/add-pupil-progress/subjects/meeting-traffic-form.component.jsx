import useShowSubject from "../../../../hooks/use-show-subject";

import SubjectButton from "../../../../components/subject-button/subject-button.component";
import Stars from "../../stars/stars.component";
import CurrentGradingInfo from "../current-grading-info.component";

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

const MeetingTrafficForm = ({ entry, handleChange }) => {
  const { showSubject, handleClick } = useShowSubject();
  const { meetingGrade, meetingNotes } = entry;
  return (
    <>
      <SubjectsHr />

      <SubjectsDiv>
        <SubjectButton onClick={handleClick}>
          {!showSubject ? "Show" : "Hide"} {meetingTraffic}
        </SubjectButton>

        {showSubject && (
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
                value={meetingGrade || "1"}
                onChange={handleChange}
              />
            </SliderDiv>

            <Label>{meetingTraffic} Notes:</Label>
            <StyledTextArea
              value={meetingNotes || ""}
              type="text"
              name="meetingNotes"
              onChange={handleChange}
              placeholder={placeholderInfiniteSpaceMessage}
            />
          </SubjectsInputsDiv>
        )}
      </SubjectsDiv>
    </>
  );
};

export default MeetingTrafficForm;
