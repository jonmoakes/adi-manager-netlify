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
  roundabouts,
} from "../../../../strings/strings";

const RoundaboutsForm = ({ entry, handleChange }) => {
  const { showSubject, handleClick } = useShowSubject();
  const { roundaboutsGrade, roundaboutsNotes } = entry;
  return (
    <>
      <SubjectsHr />
      <SubjectsDiv>
        <SubjectButton onClick={handleClick}>
          {!showSubject ? "Show" : "Hide"} {roundabouts}
        </SubjectButton>

        {showSubject && (
          <SubjectsInputsDiv>
            <h2>{roundabouts}:</h2>
            <Stars grade={roundaboutsGrade} />

            <SliderDiv>
              <CurrentGradingInfo />
              <StyledInput
                type="range"
                name="roundaboutsGrade"
                min="1"
                max="5"
                value={roundaboutsGrade || "1"}
                onChange={handleChange}
              />
            </SliderDiv>

            <Label>{roundabouts} notes:</Label>
            <StyledTextArea
              value={roundaboutsNotes || ""}
              type="text"
              name="roundaboutsNotes"
              onChange={handleChange}
              placeholder={placeholderInfiniteSpaceMessage}
            />
          </SubjectsInputsDiv>
        )}
      </SubjectsDiv>
    </>
  );
};

export default RoundaboutsForm;
