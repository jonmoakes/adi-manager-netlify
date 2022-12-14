import { format } from "date-fns";

import { DateDiv } from "../../../styles/div/div.styles";
import {
  Form,
  Label,
  StyledInput,
  StyledTextArea,
} from "../../../styles/form/form.styles";
import { HighlightText } from "../../../styles/span/span.styles";

const EditDiaryEntryForm = ({ handleChange, entry }) => (
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

      <Label>Edit Diary:</Label>
      <StyledTextArea
        type="text"
        name="entry"
        onChange={handleChange}
        defaultValue={entry.entry}
      />
    </Form>
  </>
);

export default EditDiaryEntryForm;
