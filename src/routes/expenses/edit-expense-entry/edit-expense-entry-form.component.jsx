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

      <Label>Edit Receipt Description:</Label>
      <StyledInput
        type="text"
        name="description"
        onChange={handleChange}
        defaultValue={entry.description}
      />

      <Label>Edit Receipt Amount ( £ ):</Label>
      <StyledInput
        type="number"
        name="amount"
        onChange={handleChange}
        defaultValue={entry.amount}
      />
    </Form>
  </>
);

export default EditExpenseEntryForm;
