import SumInfo from "./sum-info.component";

import { Div } from "../../styles/div/div.styles";
import { HighlightText, Amount } from "../../styles/span/span.styles";

const CombinedTotal = ({ chosenEntryLength, sum }) => {
  return (
    <>
      {chosenEntryLength > 1 && (
        <Div>
          <p>
            please select only one entry in order to show the edit and delete
            entry buttons.
          </p>
          <p>
            here is the combined total of your{" "}
            <HighlightText>selected</HighlightText> entries:
            <br />
            <Amount>£{sum.toFixed(2)}</Amount>
          </p>
          <SumInfo />
        </Div>
      )}
    </>
  );
};

export default CombinedTotal;
