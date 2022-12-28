import useDisplayEntryHeading from "./use-display-entry-heading";

import { Div } from "../../styles/div/div.styles";
import { Heading } from "../../styles/h1/h1.styles";
import { HighlightText } from "../../styles/span/span.styles";

const AddEntryHeading = () => {
  const { categoryName } = useDisplayEntryHeading();

  return (
    <Div>
      <Heading>Add {categoryName} Entry</Heading>
      <HighlightText>*</HighlightText> Required
    </Div>
  );
};

export default AddEntryHeading;
