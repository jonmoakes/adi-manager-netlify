import { format } from "date-fns";

import { DateDiv } from "../../../styles/div/div.styles";
import { Form, Label, StyledInput } from "../../../styles/form/form.styles";
import { HighlightText } from "../../../styles/span/span.styles";

const EditTotalExpensesYearEntryForm = ({ handleChange, entry }) => (
  <>
    <DateDiv>
      <p>date of entry:</p>

      {entry.date && (
        <p>
          <HighlightText>{format(new Date(entry.date), "yyyy")}</HighlightText>
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
        name="yearlyAmount"
        onChange={handleChange}
        defaultValue={entry.yearlyAmount}
      />
    </Form>
  </>
);

export default EditTotalExpensesYearEntryForm;
