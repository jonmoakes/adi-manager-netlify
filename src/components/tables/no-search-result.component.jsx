import { NoSearchResultDiv } from "../../styles/div/div.styles";

const NoSearchResult = () => (
  <NoSearchResultDiv>
    <h2>no result found....</h2>
    <p>please refine your search query</p>
    <p>or tap the 'X' in the search bar to clear it.</p>
  </NoSearchResultDiv>
);

export default NoSearchResult;
