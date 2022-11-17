import { useSelector } from "react-redux";
import { ErrorDiv } from "../../styles/div/div.styles";

import { selectErrorMessage } from "../../store/error/error.selector";

const NoEntriesInfo = ({ dataLength }) => {
  const errorMessage = useSelector(selectErrorMessage);
  return (
    <>
      {!dataLength && !errorMessage && (
        <ErrorDiv>
          <p>
            no entries yet. tap the plus button in the top right to add an
            entry.
          </p>
        </ErrorDiv>
      )}
    </>
  );
};

export default NoEntriesInfo;
