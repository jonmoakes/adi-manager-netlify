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

const CountryLanesForm = ({ entry, handleChange }) => {
  const { showSubject, handleClick } = useShowSubject();
  const { lanesGrade, lanesNotes } = entry;
  return (
    <>
      <SubjectsHr />

      <SubjectsDiv>
        <SubjectButton onClick={handleClick}>
          {!showSubject ? "Show" : "Hide"} Country Lanes
        </SubjectButton>

        {showSubject && (
          <SubjectsInputsDiv>
            <h2>Country Lanes:</h2>
            <Stars grade={lanesGrade} />

            <SliderDiv>
              <CurrentGradingInfo />
              <StyledInput
                type="range"
                name="lanesGrade"
                min="1"
                max="5"
                value={lanesGrade || "1"}
                onChange={handleChange}
              />
            </SliderDiv>

            <Label>Country Lanes Notes:</Label>
            <StyledTextArea
              value={lanesNotes || ""}
              type="text"
              name="lanesNotes"
              onChange={handleChange}
              placeholder={placeholderInfiniteSpaceMessage}
            />
          </SubjectsInputsDiv>
        )}
      </SubjectsDiv>
    </>
  );
};

export default CountryLanesForm;
