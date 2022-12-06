import {
  Form,
  Label,
  StyledInput,
  StyledTextArea,
} from "../../../styles/form/form.styles";
import { HighlightText } from "../../../styles/span/span.styles";

import {
  placeholderInfiniteSpaceMessage,
  datePlaceholder,
} from "../../../strings/strings";

const AddDiaryEntryForm = ({ handleChange }) => (
  <Form>
    <Label>
      <HighlightText>*</HighlightText> Choose Date:
    </Label>
    <StyledInput
      className="date-picker"
      type="date"
      name="date"
      onChange={handleChange}
      placeholder={datePlaceholder}
    />

    <Label>Entry:</Label>
    <StyledTextArea
      type="text"
      name="entry"
      onChange={handleChange}
      placeholder={placeholderInfiniteSpaceMessage}
    />
  </Form>
);
export default AddDiaryEntryForm;
