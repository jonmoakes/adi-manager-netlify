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
  CapitalizedInput,
  StyledInput,
  StyledTextArea,
} from "../../../../styles/form/form.styles";
import { SubjectsHr } from "../../../../styles/hr/hr.styles";
import { HighlightText } from "../../../../styles/span/span.styles";

import { placeholderInfiniteSpaceMessage } from "../../../../strings/strings";

const LatestLessonForm = ({ entry, handleChange }) => {
  const { showSubject, handleClick } = useShowSubject();
  const {
    latestLessonDate,
    latestLessonGrade,
    latestLessonPerformanceSummary,
  } = entry;
  return (
    <>
      <Label>
        <HighlightText>*</HighlightText> Pupil Name:
      </Label>

      <CapitalizedInput type="text" name="name" onChange={handleChange} />

      <SubjectsHr />

      <SubjectsDiv>
        <SubjectButton onClick={handleClick}>
          {!showSubject ? "Show" : "Hide"} Latest Lesson
        </SubjectButton>

        {showSubject && (
          <SubjectsInputsDiv>
            <h2>Latest Lesson Overall Performance:</h2>
            <Label className="lessonDate">
              Latest Lesson Performance Date:
            </Label>
            <StyledInput
              className="date-picker lessonDate"
              value={latestLessonDate || ""}
              type="date"
              name="latestLessonDate"
              onChange={handleChange}
            />

            <Stars grade={latestLessonGrade} />

            <SliderDiv>
              <CurrentGradingInfo />

              <StyledInput
                type="range"
                name="latestLessonGrade"
                min="1"
                max="5"
                value={latestLessonGrade || "1"}
                onChange={handleChange}
              />
            </SliderDiv>

            <Label>Latest Lesson Performance Summary:</Label>
            <StyledTextArea
              value={latestLessonPerformanceSummary || ""}
              type="text"
              name="latestLessonPerformanceSummary"
              onChange={handleChange}
              placeholder={placeholderInfiniteSpaceMessage}
            />
          </SubjectsInputsDiv>
        )}
      </SubjectsDiv>
    </>
  );
};

export default LatestLessonForm;
