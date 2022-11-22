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
            please note, if you're searching for a month, please search for it's
            numerical value - for example "11" for november or "04" for april
          </p>
          <p>
            if you're searching for a date and month, for example June 16th
            please search for 06-16.
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
