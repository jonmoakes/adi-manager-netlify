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

const CockpitDrillForm = ({ entry, handleChange }) => {
  const { showSubject, handleClick } = useShowSubject();
  const { cockpitDrillGrade, cockpitDrillNotes } = entry;

  return (
    <>
      <SubjectsHr />
      <SubjectsDiv>
        <SubjectButton onClick={handleClick}>
          {!showSubject ? "Show" : "Hide"} Cockpit Drill
        </SubjectButton>

        {showSubject && (
          <SubjectsInputsDiv>
            <h2>Cockpit Drill:</h2>
            <Stars grade={cockpitDrillGrade} />

            <SliderDiv>
              <CurrentGradingInfo />
              <StyledInput
                type="range"
                name="cockpitDrillGrade"
                min="1"
                max="5"
                value={cockpitDrillGrade || "1"}
                onChange={handleChange}
              />
            </SliderDiv>

            <Label>Cockpit Drill Notes</Label>
            <StyledTextArea
              value={cockpitDrillNotes || ""}
              type="text"
              name="cockpitDrillNotes"
              onChange={handleChange}
              placeholder={placeholderInfiniteSpaceMessage}
            />
          </SubjectsInputsDiv>
        )}
      </SubjectsDiv>
    </>
  );
};

export default CockpitDrillForm;
