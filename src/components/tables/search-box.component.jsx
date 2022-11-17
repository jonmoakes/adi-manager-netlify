import { useState } from "react";
import { useAsyncDebounce } from "react-table";
// import { format } from "date-fns";

import Loader from "../loader/loader.component";
import NoSearchResult from "./no-search-result.component";

import { ClearSearchButton } from "../../styles/buttons/buttons.styles";
import { TableSearchDiv } from "../../styles/div/div.styles";
import { SearchInput } from "../../styles/form/form.styles";

const SearchBox = ({
  chosenEntry,
  rows,
  data,
  globalFilter,
  setGlobalFilter,
}) => {
  const [value, setValue] = useState(globalFilter);
  const [isSearching, setIsSearching] = useState(false);

  // const dates = data.map((entries) => entries.date);
  // const formattedDate = format(new Date(dates), "dd MMMM yyyy");
  // console.log(formattedDate);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
    setIsSearching(false);
  }, 400);

  const clearSearch = () => {
    setValue("");
    setGlobalFilter(undefined);
  };

  return (
    <>
      {isSearching && <Loader />}
      {chosenEntry.length === 0 && !!data.length && (
        <TableSearchDiv>
          <SearchInput
            type="search"
            placeholder="Search Entries..."
            onChange={(e) => {
              setIsSearching(true);
              setValue(e.target.value);
              onChange(e.target.value);
            }}
            value={value || ""}
          />

          {value && value.length > 0 && (
            <ClearSearchButton onClick={clearSearch}>x</ClearSearchButton>
          )}
        </TableSearchDiv>
      )}

      {value !== "" && rows.length === 0 && data.length !== 0 && (
        <NoSearchResult />
      )}
    </>
  );
};

export default SearchBox;

// import { useState } from "react";
// import { useSelector } from "react-redux";
// import { useAsyncDebounce } from "react-table";

// import { selectErrorMessage } from "../../store/error/error.selector";

// import Loader from "../loader/loader.component";

// import { SearchDiv } from "../../styles/div/div.styles";
// import { SearchInput } from "../../styles/form/form.styles";

// const SearchBox = ({ chosenEntryLength, filter, setFilter }) => {
//   const [value, setValue] = useState(filter);
//   const [isSearching, setIsSearching] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [showHelp, setShowHelp] = useState(false);
//   const errorMessage = useSelector(selectErrorMessage);

//   const onChange = useAsyncDebounce((value) => {
//     if (value.length === 0) {
//       setIsLoading(true);
//       window.location.reload();
//     } else if (value.length > 0) {
//       setShowHelp(true);
//     }
//     setFilter(value || undefined);
//     setIsSearching(false);
//   }, 500);

//   return (
//     <>
//       {!chosenEntryLength && !errorMessage && (
//         <SearchDiv>
//           <SearchInput
//             value={value || ""}
//             type="search"
//             onChange={(e) => {
//               setIsSearching(true);
//               setValue(e.target.value);
//               onChange(e.target.value);
//             }}
//             placeholder="Search Entries"
//           />

//           {showHelp && (
//             <p>
//               clear the search text
//               <br />
//               to show the full table again.
//             </p>
//           )}

//           {(isSearching || isLoading) && <Loader />}
//         </SearchDiv>
//       )}
//     </>
//   );
// };

// export default SearchBox;
