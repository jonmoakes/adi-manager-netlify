import { Form, Label, StyledInput } from "../../../styles/form/form.styles";
import { HighlightText } from "../../../styles/span/span.styles";

import { totalIncomeWeekPlaceholder } from "../../../strings/strings";

const AddTotalExpensesWeekEntryForm = ({ handleChange }) => (
  <Form>
    <Label>
      <HighlightText>*</HighlightText> Choose Date ( Week Ending ):
    </Label>
    <StyledInput
      className="date-picker"
      type="date"
      name="date"
      onChange={handleChange}
    />

    <Label>
      <HighlightText>*</HighlightText> Week Income:
    </Label>
    <StyledInput
      type="number"
      name="weeklyAmount"
      onChange={handleChange}
      placeholder={totalIncomeWeekPlaceholder}
    />
  </Form>
);

export default AddTotalExpensesWeekEntryForm;
