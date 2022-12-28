import { format } from "date-fns";

import useShowSubject from "../../../../hooks/use-show-subject";
import usePupilProgressEmailBody from "./use-pupil-progress-email-body.js";

import SubjectButton from "../../../../components/subject-button/subject-button.component";
import GradeButtons from "./grade-buttons.component";
import Stars from "../../stars/stars.component";
import CurrentGradingInfo from "../../add-pupil-progress/current-grading-info.component";
import EmailEntryButtons from "../../../../components/email-entry-buttons/email-entry-buttons.component";

import {
  SubjectsDiv,
  SubjectsInputsDiv,
  SliderDiv,
  DateDiv,
} from "../../../../styles/div/div.styles";
import {
  Label,
  CapitalizedInput,
  StyledInput,
  StyledTextArea,
} from "../../../../styles/form/form.styles";
import { HighlightText } from "../../../../styles/span/span.styles";

import { latestLessonProgress } from "../../../../strings/strings";

const EditLatestLessonForm = ({ entry, updatedEntry, handleChange }) => {
  const { showSubject, handleClick } = useShowSubject();
  const { emailBody } = usePupilProgressEmailBody();
  const {
    name,
    latestLessonDate,
    latestLessonGrade,
    latestLessonPerformanceSummary,
  } = updatedEntry;

  return (
    <>
      <Label>
        <HighlightText>*</HighlightText>Pupil Name:
      </Label>
      <CapitalizedInput
        type="text"
        name="name"
        defaultValue={name}
        onChange={handleChange}
      />

      <SubjectsDiv>
        <GradeButtons
          subjectGrade={latestLessonGrade}
          buttonText={latestLessonProgress}
          {...{ showSubject, handleClick }}
        />

        {showSubject && (
          <>
            <SubjectButton onClick={handleClick}>
              Hide {latestLessonProgress}
            </SubjectButton>

            <SubjectsInputsDiv>
              <DateDiv className="progress">
                <p>date of {latestLessonProgress} entry:</p>

                {latestLessonDate ? (
                  <p>
                    <HighlightText>
                      {format(new Date(latestLessonDate), "dd MMMM yyyy")}
                    </HighlightText>
                  </p>
                ) : (
                  <p>
                    no date given yet.
                    <br />
                    choose one below.
                  </p>
                )}
              </DateDiv>
              <Label>edit latest lesson date:</Label>
              <StyledInput
                className="date-picker lessonDate"
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
                  value={latestLessonGrade}
                  onChange={handleChange}
                />
              </SliderDiv>

              <Label>{latestLessonProgress} Summary:</Label>
              <StyledTextArea
                type="text"
                name="latestLessonPerformanceSummary"
                onChange={handleChange}
                defaultValue={latestLessonPerformanceSummary}
              />
              {entry.latestLessonDate && (
                <EmailEntryButtons {...{ entry, emailBody }} />
              )}
            </SubjectsInputsDiv>
          </>
        )}
      </SubjectsDiv>
    </>
  );
};

export default EditLatestLessonForm;
