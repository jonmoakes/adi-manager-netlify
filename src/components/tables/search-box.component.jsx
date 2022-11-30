import { useState } from "react";
import { useAsyncDebounce } from "react-table";

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
        <NoSearchResult {...{ value }} />
      )}
    </>
  );
};

export default SearchBox;
