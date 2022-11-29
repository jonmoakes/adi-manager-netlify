import { format } from "date-fns";

import { DateDiv } from "../../../styles/div/div.styles";
import {
  CapitalizedInput,
  Form,
  Label,
  StyledInput,
  StyledSelect,
} from "../../../styles/form/form.styles";
import { HighlightText } from "../../../styles/span/span.styles";

const EditIncomeEntryForm = ({ handleChange, entry }) => (
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
        defaultValue={entry.name}
      />

      <Label>Edit Income Received ( £ ):</Label>
      <StyledInput
        type="number"
        name="incomeReceived"
        onChange={handleChange}
        defaultValue={entry.incomeReceived}
      />

      <Label>Edit Is Entry A Block Booking?</Label>
      {entry.blockBooking === "" ? (
        <StyledSelect
          name="blockBooking"
          onChange={handleChange}
          defaultValue="tap to choose"
        >
          <option disabled>Please Select</option>
          <option value="tap to choose">Not Selected - Tap To Choose</option>
          <option value="No">No</option>
          <option value="Yes">Yes</option>
        </StyledSelect>
      ) : (
        <StyledSelect
          name="blockBooking"
          onChange={handleChange}
          defaultValue={entry.blockBooking}
        >
          <option disabled>Please Select</option>
          <option value={entry.blockBooking}>{entry.blockBooking}</option>
          {entry.blockBooking === "Yes" ? (
            <option value="No">No</option>
          ) : (
            <option value="Yes">Yes</option>
          )}
        </StyledSelect>
      )}

      <Label>Edit Payment Method:</Label>
      {entry.paymentMethod === "" ? (
        <StyledSelect
          name="paymentMethod"
          onChange={handleChange}
          defaultValue="tap to choose"
        >
          <option disabled>Please Select</option>
          <option value="tap to choose">Not Selected - Tap To Choose</option>
          <option value="Cash">Cash</option>
          <option value="Card">Card</option>
          <option value="Bank Transfer">Bank Transfer</option>
          <option value="Cheque">Cheque</option>
        </StyledSelect>
      ) : entry.paymentMethod === "Cash" ? (
        <StyledSelect
          name="paymentMethod"
          onChange={handleChange}
          defaultValue={entry.paymentMethod}
        >
          <option disabled>Please Select</option>
          <option value={entry.paymentMethod}>{entry.paymentMethod}</option>

          <option value="Card">Card</option>
          <option value="Bank Transfer">Bank Transfer</option>
          <option value="Cheque">Cheque</option>
        </StyledSelect>
      ) : entry.paymentMethod === "Card" ? (
        <StyledSelect
          name="paymentMethod"
          onChange={handleChange}
          defaultValue={entry.paymentMethod}
        >
          <option disabled>Please Select</option>
          <option value={entry.paymentMethod}>{entry.paymentMethod}</option>

          <option value="Cash">Cash</option>
          <option value="Bank Transfer">Bank Transfer</option>
          <option value="Cheque">Cheque</option>
        </StyledSelect>
      ) : entry.paymentMethod === "Bank Transfer" ? (
        <StyledSelect
          name="paymentMethod"
          onChange={handleChange}
          defaultValue={entry.paymentMethod}
        >
          <option disabled>Please Select</option>
          <option value={entry.paymentMethod}>{entry.paymentMethod}</option>
          <option value="Cash">Cash</option>
          <option value="Card">Card</option>

          <option value="Cheque">Cheque</option>
        </StyledSelect>
      ) : entry.paymentMethod === "Cheque" ? (
        <StyledSelect
          name="paymentMethod"
          onChange={handleChange}
          defaultValue={entry.paymentMethod}
        >
          <option disabled>Please Select</option>
          <option value={entry.paymentMethod}>{entry.paymentMethod}</option>
          <option value="Cash">Cash</option>
          <option value="Card">Card</option>
          <option value="Bank Transfer">Bank Transfer</option>
        </StyledSelect>
      ) : null}
    </Form>
  </>
);

export default EditIncomeEntryForm;
