import { Form, Label, StyledInput } from "../../../styles/form/form.styles";
import { HighlightText } from "../../../styles/span/span.styles";

const AddExpensesEntryForm = ({ handleChange }) => (
  <Form>
    <Label>
      <HighlightText>*</HighlightText> Choose Date:
    </Label>
    <StyledInput
      className="date-picker"
      type="date"
      name="date"
      onChange={handleChange}
    />

    <Label>
      <HighlightText>*</HighlightText> Description Of Receipt:
    </Label>
    <StyledInput
      type="text"
      name="description"
      onChange={handleChange}
      placeholder="Ie Fuel / Service Etc"
    />

    <Label>
      <HighlightText>*</HighlightText> Receipt Amount ( £ ):
    </Label>
    <StyledInput
      type="number"
      name="amount"
      onChange={handleChange}
      placeholder="£"
    />
  </Form>
);

export default AddExpensesEntryForm;
