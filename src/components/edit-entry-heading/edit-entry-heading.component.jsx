import useDisplayEditEntryHeading from "./use-display-edit-entry-heading";

import { Div } from "../../styles/div/div.styles";
import { Heading } from "../../styles/h1/h1.styles";

const EditEntryHeading = () => {
  const { categoryName } = useDisplayEditEntryHeading();

  return (
    <Div>
      <Heading>View / Edit {categoryName} Entry</Heading>
    </Div>
  );
};
export default EditEntryHeading;
