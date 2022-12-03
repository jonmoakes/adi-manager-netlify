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
  reverseBayPark,
} from "../../../../strings/strings";

const EditReverseBayParkForm = ({ updatedEntry, handleChange }) => {
  const { showSubject, handleClick } = useShowSubject();
  const { reverseBayGrade, reverseBayNotes } = updatedEntry;

  return (
    <>
      <SubjectsHr />

      <SubjectsDiv>
        <GradeButtons
          subjectGrade={reverseBayGrade}
          buttonText={reverseBayPark}
          {...{ showSubject, handleClick }}
        />

        {showSubject && (
          <>
            <SubjectButton onClick={handleClick}>
              Hide {reverseBayPark}
            </SubjectButton>

            <SubjectsInputsDiv>
              <h2>{reverseBayPark}:</h2>
              <Stars grade={reverseBayGrade} />

              <SliderDiv>
                <CurrentGradingInfo />
                <StyledInput
                  type="range"
                  name="reverseBayGrade"
                  min="1"
                  max="5"
                  defaultValue={reverseBayGrade}
                  onChange={handleChange}
                />
              </SliderDiv>

              <Label>{reverseBayPark} Notes:</Label>
              <StyledTextArea
                defaultValue={reverseBayNotes}
                type="text"
                name="reverseBayNotes"
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

export default EditReverseBayParkForm;
