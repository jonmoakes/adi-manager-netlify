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

import { placeholderInfiniteSpaceMessage } from "../../../../strings/strings";

const ForwardBayParkForm = ({ entry, handleChange }) => {
  const { showSubject, handleClick } = useShowSubject();
  const { fBayGrade, fBayNotes } = entry;
  return (
    <>
      <SubjectsHr />

      <SubjectsDiv>
        <SubjectButton onClick={handleClick}>
          {!showSubject ? "Show" : "Hide"} Forward Bay Park
        </SubjectButton>

        {showSubject && (
          <SubjectsInputsDiv>
            <h2>Forward Bay Park:</h2>
            <Stars grade={fBayGrade} />

            <SliderDiv>
              <CurrentGradingInfo />
              <StyledInput
                type="range"
                name="fBayGrade"
                min="1"
                max="5"
                value={fBayGrade || "1"}
                onChange={handleChange}
              />
            </SliderDiv>

            <Label>Forward Bay Park Notes:</Label>
            <StyledTextArea
              value={fBayNotes || ""}
              type="text"
              name="fBayNotes"
              onChange={handleChange}
              placeholder={placeholderInfiniteSpaceMessage}
            />
          </SubjectsInputsDiv>
        )}
      </SubjectsDiv>
    </>
  );
};

export default ForwardBayParkForm;
