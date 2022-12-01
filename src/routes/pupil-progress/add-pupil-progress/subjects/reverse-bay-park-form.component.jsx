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

const ReverseBayParkForm = ({ entry, handleChange }) => {
  const { showSubject, handleClick } = useShowSubject();
  const { reverseBayGrade, reverseBayNotes } = entry;
  return (
    <>
      <SubjectsHr />

      <SubjectsDiv>
        <SubjectButton onClick={handleClick}>
          {!showSubject ? "Show" : "Hide"} Reverse Bay Park
        </SubjectButton>

        {showSubject && (
          <SubjectsInputsDiv>
            <h2>Reverse Bay Park:</h2>
            <Stars grade={reverseBayGrade} />

            <SliderDiv>
              <CurrentGradingInfo />
              <StyledInput
                type="range"
                name="reverseBayGrade"
                min="1"
                max="5"
                value={reverseBayGrade || "1"}
                onChange={handleChange}
              />
            </SliderDiv>

            <Label>Reverse Bay Park Notes:</Label>
            <StyledTextArea
              value={reverseBayNotes || ""}
              type="text"
              name="reverseBayNotes"
              onChange={handleChange}
              placeholder={placeholderInfiniteSpaceMessage}
            />
          </SubjectsInputsDiv>
        )}
      </SubjectsDiv>
    </>
  );
};

export default ReverseBayParkForm;
