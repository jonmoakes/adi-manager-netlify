import { Form, Label, StyledInput } from "../../../styles/form/form.styles";
import { HighlightText } from "../../../styles/span/span.styles";

const AddTotalExpensesYearEntryForm = ({ id, handleChange }) => (
  <Form>
    <Label>
      <HighlightText>*</HighlightText> Enter Year:
    </Label>
    <StyledInput
      className="date-picker"
      type="date"
      name="date"
      onChange={handleChange}
      placeholder="Ie 2022"
    />

    <Label>
      <HighlightText>*</HighlightText> Year Income:
    </Label>
    <StyledInput
      type="number"
      name="yearlyAmount"
      onChange={handleChange}
      placeholder="£"
    />
  </Form>
);

export default AddTotalExpensesYearEntryForm;
