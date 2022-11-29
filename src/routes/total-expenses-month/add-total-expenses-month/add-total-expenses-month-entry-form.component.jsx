import { Form, Label, StyledInput } from "../../../styles/form/form.styles";
import { HighlightText } from "../../../styles/span/span.styles";

const AddTotalExpensesMonthEntryForm = ({ id, handleChange }) => (
  <Form>
    <Label>
      <HighlightText>*</HighlightText> Choose Date ( Month Of Year ):
    </Label>
    <StyledInput
      className="date-picker"
      type="date"
      name="date"
      onChange={handleChange}
    />

    <Label>
      <HighlightText>*</HighlightText> Monthly Income:
    </Label>
    <StyledInput
      type="number"
      name="monthlyAmount"
      onChange={handleChange}
      placeholder="£"
    />
  </Form>
);

export default AddTotalExpensesMonthEntryForm;
