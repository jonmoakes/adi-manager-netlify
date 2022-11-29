import { format } from "date-fns";

import { DateDiv } from "../../../styles/div/div.styles";
import { Form, Label, StyledInput } from "../../../styles/form/form.styles";
import { HighlightText } from "../../../styles/span/span.styles";

const EditExpenseEntryForm = ({ handleChange, entry }) => (
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

      <Label>Edit Amount ( £ ):</Label>
      <StyledInput
        type="number"
        name="weeklyAmount"
        onChange={handleChange}
        defaultValue={entry.weeklyAmount}
      />
    </Form>
  </>
);

export default EditExpenseEntryForm;
