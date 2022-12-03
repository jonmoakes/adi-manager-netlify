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
  pullUpRight,
} from "../../../../strings/strings";

const EditPullUpRightForm = ({ updatedEntry, handleChange }) => {
  const { showSubject, handleClick } = useShowSubject();
  const { pullGrade, pullNotes } = updatedEntry;

  return (
    <>
      <SubjectsHr />

      <SubjectsDiv>
        <GradeButtons
          subjectGrade={pullGrade}
          buttonText={pullUpRight}
          {...{ showSubject, handleClick }}
        />

        {showSubject && (
          <>
            <SubjectButton onClick={handleClick}>
              Hide {pullUpRight}
            </SubjectButton>

            <SubjectsInputsDiv>
              <h2>{pullUpRight}:</h2>
              <Stars grade={pullGrade} />

              <SliderDiv>
                <CurrentGradingInfo />
                <StyledInput
                  type="range"
                  name="pullGrade"
                  min="1"
                  max="5"
                  defaultValue={pullGrade}
                  onChange={handleChange}
                />
              </SliderDiv>

              <Label>Pull Up On The Right Notes:</Label>
              <StyledTextArea
                defaultValue={pullNotes}
                type="text"
                name="pullNotes"
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

export default EditPullUpRightForm;
