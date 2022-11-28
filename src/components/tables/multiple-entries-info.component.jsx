import { Div } from "../../styles/div/div.styles";

const MultipleEntriesInfo = ({ dataLength, chosenEntryLength }) => {
  return (
    <>
      {dataLength > 1 && chosenEntryLength <= 1 && (
        <Div>
          <p>
            select multiple entries to automatically add the receipt amounts
            together.
          </p>
        </Div>
      )}
    </>
  );
};

export default MultipleEntriesInfo;
