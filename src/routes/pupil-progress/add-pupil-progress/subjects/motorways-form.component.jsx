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

const MotorwaysForm = ({ entry, handleChange }) => {
  const { showSubject, handleClick } = useShowSubject();
  const { mwaysGrade, mwaysNotes } = entry;
  return (
    <>
      <SubjectsHr />
      <SubjectsDiv>
        <SubjectButton onClick={handleClick}>
          {!showSubject ? "Show" : "Hide"} Motorways
        </SubjectButton>

        {showSubject && (
          <SubjectsInputsDiv>
            <h2>Motorways:</h2>
            <Stars grade={mwaysGrade} />

            <SliderDiv>
              <CurrentGradingInfo />
              <StyledInput
                type="range"
                name="mwaysGrade"
                min="1"
                max="5"
                value={mwaysGrade || "1"}
                onChange={handleChange}
              />
            </SliderDiv>

            <Label>Motorways Notes:</Label>
            <StyledTextArea
              value={mwaysNotes || ""}
              type="text"
              name="mwaysNotes"
              onChange={handleChange}
              placeholder={placeholderInfiniteSpaceMessage}
            />
          </SubjectsInputsDiv>
        )}
      </SubjectsDiv>
    </>
  );
};

export default MotorwaysForm;
