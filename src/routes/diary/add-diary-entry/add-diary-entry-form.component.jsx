import {
  Form,
  Label,
  StyledInput,
  StyledTextArea,
} from "../../../styles/form/form.styles";
import { HighlightText } from "../../../styles/span/span.styles";

import { placeholderInfiniteSpaceMessage } from "../../../strings/strings";

const AddDiaryEntryForm = ({ id, handleChange }) => (
  <Form>
    <Label>
      <HighlightText>*</HighlightText> Choose Date:
    </Label>
    <StyledInput
      className="date-picker"
      id={id}
      type="date"
      name="date"
      onChange={handleChange}
    />

    <Label>Entry:</Label>
    <StyledTextArea
      id={id}
      type="text"
      name="entry"
      onChange={handleChange}
      placeholder={placeholderInfiniteSpaceMessage}
    />
  </Form>
);
export default AddDiaryEntryForm;
