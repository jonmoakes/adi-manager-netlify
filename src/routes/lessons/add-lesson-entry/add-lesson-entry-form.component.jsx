import {
  Form,
  Label,
  StyledInput,
  StyledTextArea,
  StyledSelect,
  CapitalizedInput,
} from "../../../styles/form/form.styles";
import { HighlightText } from "../../../styles/span/span.styles";

import {
  summariseTheLessonPlaceholder,
  nextLessonPlanPlaceholder,
  ifDifferentToNormalPlaceholder,
} from "../../../strings/strings";

const AddLessonEntryForm = ({ handleChange }) => (
  <Form>
    <Label>
      <HighlightText>*</HighlightText> Choose Date:
    </Label>
    <StyledInput
      className="date-picker"
      type="date"
      name="date"
      onChange={handleChange}
    />

    <Label>
      <HighlightText>*</HighlightText> Pupil Name:
    </Label>
    <CapitalizedInput type="text" name="name" onChange={handleChange} />

    <Label>
      <HighlightText>*</HighlightText> Has Pupil Paid?:
    </Label>

    <StyledSelect name="paid" onChange={handleChange}>
      <option value="select">Select</option>
      <option value="Yes">Yes</option>
      <option value="No">No</option>
    </StyledSelect>

    <Label>Lesson Start Time:</Label>
    <StyledInput
      className="date-picker"
      type="time"
      name="startTime"
      onChange={handleChange}
    />

    <Label>Lesson End Time:</Label>
    <StyledInput
      className="date-picker"
      type="time"
      name="endTime"
      onChange={handleChange}
    />

    <Label>Lesson Summary:</Label>
    <StyledTextArea
      type="text"
      name="lessonSummary"
      onChange={handleChange}
      placeholder={summariseTheLessonPlaceholder}
    />

    <Label>Next Lesson Plan:</Label>
    <CapitalizedInput
      type="text"
      name="nextLessonPlan"
      onChange={handleChange}
      placeholder={nextLessonPlanPlaceholder}
    />

    <Label>Next Lesson Date:</Label>
    <StyledInput
      className="date-picker"
      type="date"
      name="nextLessonDate"
      onChange={handleChange}
    />

    <Label>Next Lesson Time:</Label>
    <StyledInput
      className="date-picker"
      type="time"
      name="nextLessonTime"
      onChange={handleChange}
    />

    <Label>Next Lesson Pickup:</Label>
    <CapitalizedInput
      type="text"
      name="nextLessonPickup"
      onChange={handleChange}
      placeholder={ifDifferentToNormalPlaceholder}
    />
  </Form>
);

export default AddLessonEntryForm;
