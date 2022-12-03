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
  satNav,
} from "../../../../strings/strings";

const SatNavForm = ({ entry, handleChange }) => {
  const { showSubject, handleClick } = useShowSubject();
  const { satGrade, satNotes } = entry;
  return (
    <>
      <SubjectsHr />

      <SubjectsDiv>
        <SubjectButton onClick={handleClick}>
          {!showSubject ? "Show" : "Hide"} {satNav}
        </SubjectButton>

        {showSubject && (
          <SubjectsInputsDiv>
            <h2>{satNav}:</h2>
            <Stars grade={satGrade} />

            <SliderDiv>
              <CurrentGradingInfo />
              <StyledInput
                type="range"
                name="satGrade"
                min="1"
                max="5"
                value={satGrade || "1"}
                onChange={handleChange}
              />
            </SliderDiv>

            <Label>{satNav} Notes:</Label>
            <StyledTextArea
              value={satNotes || ""}
              type="text"
              name="satNotes"
              onChange={handleChange}
              placeholder={placeholderInfiniteSpaceMessage}
            />
          </SubjectsInputsDiv>
        )}
      </SubjectsDiv>
    </>
  );
};

export default SatNavForm;
