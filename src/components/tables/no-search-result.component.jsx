import { NoSearchResultDiv } from "../../styles/div/div.styles";

import { searchingForDate } from "../../reusable-functions/searching-for-date";

const NoSearchResult = ({ value }) => {
  return (
    <NoSearchResultDiv>
      <h2>no result found....</h2>
      <p>please refine your search query</p>
      <p>or tap the 'X' in the search bar to clear it.</p>

      {searchingForDate(value) && (
        <>
          <hr />
          <p>
            please note, if you're searching for a month, please use just the
            first 3 characters, for example "Nov" for november or "Jan" for
            january.
          </p>
          <p>
            if you're searching for a date and month, please enter it as for
            example "jun 16" NOT "16 jun.
          </p>
          <p>
            this is because of the way the data is received & formatted from the
            database.
          </p>
        </>
      )}
    </NoSearchResultDiv>
  );
};

export default NoSearchResult;
