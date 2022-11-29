import { format } from "date-fns";
import { DateDiv } from "../../../styles/div/div.styles";

import {
  Form,
  Label,
  StyledInput,
  StyledTextArea,
  StyledSelect,
  CapitalizedInput,
} from "../../../styles/form/form.styles";
import { HighlightText } from "../../../styles/span/span.styles";

const EditLessonEntryForm = ({ entry, handleChange }) => (
  <>
    <DateDiv>
      <p>date of entry:</p>

      {entry.date && (
        <p>
          <HighlightText>
            {format(new Date(entry.date), "dd MMMM yyyy")}
          </HighlightText>
        </p>
      )}
    </DateDiv>

    <Form>
      <Label>Edit Date:</Label>
      <StyledInput
        className="date-picker"
        type="date"
        name="date"
        onChange={handleChange}
      />

      <Label>Edit Pupil Name:</Label>
      <CapitalizedInput
        type="text"
        name="name"
        onChange={handleChange}
        placeholder="Enter The Pupil's Name"
        defaultValue={entry.name}
      />

      <Label>Edit Pupil Paid?:</Label>
      <StyledSelect
        name="paid"
        defaultValue={entry.paid}
        onChange={handleChange}
      >
        <option disabled>Please Select</option>
        <option value={entry.paid}>{entry.paid}</option>
        {entry.paid === "Yes" ? (
          <option value="No">No</option>
        ) : (
          <option value="Yes">Yes</option>
        )}
      </StyledSelect>

      <Label>Edit Start Time:</Label>
      <StyledInput
        className="date-picker"
        type="time"
        name="startTime"
        onChange={handleChange}
        defaultValue={entry.startTime}
      />

      <Label>Edit End Time:</Label>
      <StyledInput
        className="date-picker"
        type="time"
        name="endTime"
        onChange={handleChange}
        defaultValue={entry.endTime}
      />

      <Label>Edit Lesson Summary:</Label>
      <StyledTextArea
        type="text"
        name="lessonSummary"
        onChange={handleChange}
        defaultValue={entry.lessonSummary}
      />

      <Label>Edit Next Lesson Plan:</Label>
      <StyledInput
        type="text"
        name="nextLessonPlan"
        onChange={handleChange}
        defaultValue={entry.nextLessonPlan}
      />

      <Label>Edit Next Lesson Date:</Label>
      <StyledInput
        className="date-picker"
        type="date"
        name="nextLessonDate"
        onChange={handleChange}
        defaultValue={entry.nextLessonDate}
      />

      <Label>Edit Next Lesson Time:</Label>
      <StyledInput
        className="date-picker"
        type="time"
        name="nextLessonTime"
        onChange={handleChange}
        defaultValue={entry.nextLessonTime}
      />

      <Label>Edit Next Lesson Pickup:</Label>
      <StyledInput
        type="text"
        name="nextLessonPickup"
        onChange={handleChange}
        defaultValue={entry.nextLessonPickup}
      />
    </Form>
  </>
);

export default EditLessonEntryForm;
