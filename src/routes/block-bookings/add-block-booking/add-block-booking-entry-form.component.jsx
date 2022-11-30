import {
  CapitalizedInput,
  Form,
  Label,
  StyledInput,
} from "../../../styles/form/form.styles";
import { HighlightText } from "../../../styles/span/span.styles";

import { enterThePupilsName } from "../../../strings/strings";

const AddBlockBookingEntryForm = ({ handleChange }) => (
  <Form>
    <Label>
      <HighlightText>*</HighlightText> Pupil Name:{" "}
    </Label>
    <CapitalizedInput
      type="text"
      name="name"
      onChange={handleChange}
      placeholder={enterThePupilsName}
    />

    <Label>
      <HighlightText>*</HighlightText> Initial Booking Date:
    </Label>
    <StyledInput
      className="date-picker"
      type="date"
      name="initialBlockBookingDate"
      onChange={handleChange}
    />

    <Label>
      <HighlightText>*</HighlightText> Hours Purchased:
    </Label>
    <StyledInput type="number" name="hoursPurchased" onChange={handleChange} />

    <Label>
      <HighlightText>*</HighlightText> Latest Lesson Date:
    </Label>
    <StyledInput
      className="date-picker"
      type="date"
      name="latestLessonDate"
      onChange={handleChange}
    />

    <Label>
      <HighlightText>*</HighlightText> Latest Lesson Length ( hours ):
    </Label>
    <StyledInput
      type="number"
      name="latestLessonLength"
      onChange={handleChange}
    />

    <Label>
      <HighlightText>*</HighlightText> Balance Hours Remaining ( AFTER Latest
      Lesson Completed ):
    </Label>
    <StyledInput
      type="number"
      name="balanceHoursRemaining"
      onChange={handleChange}
      required
    />
  </Form>
);

export default AddBlockBookingEntryForm;
