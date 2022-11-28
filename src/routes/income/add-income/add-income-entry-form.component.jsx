import {
  CapitalizedInput,
  Form,
  Label,
  StyledInput,
  StyledSelect,
} from "../../../styles/form/form.styles";
import { HighlightText } from "../../../styles/span/span.styles";

import { enterThePupilsName } from "../../../strings/strings";

const AddIncomeEntryForm = ({ handleChange }) => (
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
      <HighlightText>*</HighlightText> Pupil Name:
    </Label>
    <CapitalizedInput
      type="text"
      name="name"
      onChange={handleChange}
      placeholder={enterThePupilsName}
    />

    <Label>
      <HighlightText>*</HighlightText> Income Received ( £ ):
    </Label>
    <StyledInput
      type="number"
      name="incomeReceived"
      onChange={handleChange}
      placeholder="£"
    />

    <Label>Is Block Booking?</Label>
    <StyledSelect name="blockBooking" onChange={handleChange}>
      <option value="select">Select</option>
      <option value="No">No</option>
      <option value="Yes">Yes</option>
    </StyledSelect>

    <Label>Payment Method:</Label>
    <StyledSelect name="paymentMethod" onChange={handleChange}>
      <option value="select">Select</option>
      <option value="Cash">Cash</option>
      <option value="Card">Card</option>
      <option value="Bank Transfer">Bank Transfer</option>
      <option value="Cheque">Cheque</option>
    </StyledSelect>
  </Form>
);

export default AddIncomeEntryForm;
