import {
  CapitalizedInput,
  Form,
  Label,
  StyledInput,
} from "../../../styles/form/form.styles";

import { enterThePupilsName } from "../../../strings/strings";

const EditBlockBookingEntryForm = ({ handleChange, entry }) => {
  return (
    <Form>
      <Label>Edit Pupil Name:</Label>
      <CapitalizedInput
        type="text"
        name="name"
        onChange={handleChange}
        placeholder={enterThePupilsName}
        defaultValue={entry.name}
      />

      <Label>Edit Initial Booking Date:</Label>
      <StyledInput
        className="date-picker"
        type="date"
        name="initialBlockBookingDate"
        onChange={handleChange}
        defaultValue={entry.initialBlockBookingDate}
      />

      <Label>Edit Hours Purchased:</Label>
      <StyledInput
        type="number"
        name="hoursPurchased"
        onChange={handleChange}
        defaultValue={entry.hoursPurchased}
      />

      <Label>Edit Latest Lesson Date:</Label>
      <StyledInput
        className="date-picker"
        type="date"
        name="latestLessonDate"
        onChange={handleChange}
        defaultValue={entry.latestLessonDate}
      />

      <Label>Edit Latest Lesson Length:</Label>
      <StyledInput
        type="number"
        name="latestLessonLength"
        onChange={handleChange}
        defaultValue={entry.latestLessonLength}
      />

      <Label>
        Edit Balance Hours Remaining ( AFTER Latest Lesson Completed ):
      </Label>
      <StyledInput
        type="number"
        name="balanceHoursRemaining"
        onChange={handleChange}
        defaultValue={entry.balanceHoursRemaining}
      />
    </Form>
  );
};

export default EditBlockBookingEntryForm;
