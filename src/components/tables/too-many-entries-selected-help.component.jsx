import { ErrorDiv } from "../../styles/div/div.styles";

const TooManyEntriesSelectedHelp = ({ chosenEntryLength }) => {
  return (
    <>
      {chosenEntryLength > 1 && (
        <ErrorDiv>
          <p>
            uncheck entries until only one selected entry remains in order to
            show the edit and remove entry buttons.
          </p>
        </ErrorDiv>
      )}
    </>
  );
};
export default TooManyEntriesSelectedHelp;
