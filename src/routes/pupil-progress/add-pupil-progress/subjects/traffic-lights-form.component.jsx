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
  trafficLights,
} from "../../../../strings/strings";

const TrafficLightsForm = ({ entry, handleChange }) => {
  const { showSubject, handleClick } = useShowSubject();
  const { tlGrade, tlNotes } = entry;
  return (
    <>
      <SubjectsHr />
      <SubjectsDiv>
        <SubjectButton onClick={handleClick}>
          {!showSubject ? "Show" : "Hide"} {trafficLights}
        </SubjectButton>

        {showSubject && (
          <SubjectsInputsDiv>
            <h2>{trafficLights}:</h2>
            <Stars grade={tlGrade} />

            <SliderDiv>
              <CurrentGradingInfo />
              <StyledInput
                type="range"
                name="tlGrade"
                min="1"
                max="5"
                value={tlGrade || "1"}
                onChange={handleChange}
              />
            </SliderDiv>

            <Label>{trafficLights} Notes:</Label>
            <StyledTextArea
              value={tlNotes || ""}
              type="text"
              name="tlNotes"
              onChange={handleChange}
              placeholder={placeholderInfiniteSpaceMessage}
            />
          </SubjectsInputsDiv>
        )}
      </SubjectsDiv>
    </>
  );
};

export default TrafficLightsForm;
