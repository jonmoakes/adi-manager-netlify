import { useMemo } from "react";
import { useSelector } from "react-redux";

import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
  useRowSelect,
} from "react-table";

import useLessonEntriesSnapshotListener from "./use-lesson-entries-snapshot-listener";

import { selectLessonEntries } from "../../../store/lesson/lesson.selector";
import { selectErrorMessage } from "../../../store/error/error.selector";
import { selectIsLoading } from "../../../store/loader/loader.selector";
import { selectTablePageSize } from "../../../store/table/table.selector";

import { COLUMNS } from "./columns";
import CheckBox from "../../../components/tables/checkbox";
import Loader from "../../../components/loader/loader.component";
import FetchError from "../../../components/fetch-error/fetch-error.component";
import NoEntriesInfo from "../../../components/tables/no-entries-info.component";
import TooManyEntriesSelectedHelp from "../../../components/tables/too-many-entries-selected-help.component";
import SearchBox from "../../../components/tables/search-box.component";

import EditRemoveButtons from "../../../components/tables/edit-remove-buttons.component";
import TableWithColoredCells from "../../../components/tables/rendered-tables/table-with-colored-cells.component";
import Pagination from "../../../components/tables/pagination.component";

import { TableContainerDiv } from "../../../styles/div/div.styles";
import { TableHeaderRemoveText } from "../../../styles/span/span.styles";

import { scrollToTop } from "../../../reusable-functions/scroll-to-top";

import { deleteEntryPath, editLessonEntryPath } from "../../../strings/strings";

const LessTable = () => {
  useLessonEntriesSnapshotListener();

  const errorMessage = useSelector(selectErrorMessage);
  let lessonEntries = useSelector(selectLessonEntries);
  const isLoading = useSelector(selectIsLoading);
  const tablePageSize = useSelector(selectTablePageSize);

  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => lessonEntries, [lessonEntries]);

  const initialState = useMemo(
    () => ({ sortBy: [{ id: "date", desc: true }], pageSize: tablePageSize }),
    [tablePageSize]
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    rows,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
    prepareRow,
    state,
    setGlobalFilter,
    selectedFlatRows,
  } = useTable(
    {
      columns,
      data,
      initialState,
    },
    useGlobalFilter,
    useSortBy,
    usePagination,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => {
        return [
          ...columns,
          {
            Header: () => (
              <TableHeaderRemoveText>&#10004;</TableHeaderRemoveText>
            ),
            Cell: ({ row }) => {
              return (
                <CheckBox
                  onClick={() => scrollToTop()}
                  {...row.getToggleRowSelectedProps()}
                />
              );
            },
          },
        ];
      });
    }
  );

  const { globalFilter, pageIndex, pageSize } = state;
  const chosenEntry = selectedFlatRows.map((row) => row.original);
  // next line is so only one edit and remove button appears.
  lessonEntries = chosenEntry;
  const dataLength = data.length;
  const rowsLength = rows.length;
  const chosenEntryLength = chosenEntry.length;
  const entries = lessonEntries;
  const editPath = editLessonEntryPath;
  const deletePath = deleteEntryPath;

  return (
    <TableContainerDiv>
      {isLoading && <Loader />}
      {errorMessage ? (
        <FetchError />
      ) : (
        <>
          <NoEntriesInfo {...{ dataLength }} />

          {!!data.length && (
            <>
              <TooManyEntriesSelectedHelp {...{ chosenEntryLength }} />
              <SearchBox
                {...{
                  chosenEntry,
                  rows,
                  data,
                  globalFilter,
                  setGlobalFilter,
                }}
              />

              <EditRemoveButtons
                {...{
                  chosenEntryLength,
                  chosenEntry,
                  entries,
                  editPath,
                  deletePath,
                }}
              />

              <TableWithColoredCells
                {...{
                  initialState,
                  headerGroups,
                  getTableProps,
                  getTableBodyProps,
                  page,
                  prepareRow,
                }}
              />

              <Pagination
                {...{
                  dataLength,
                  rowsLength,
                  gotoPage,
                  pageOptions,
                  nextPage,
                  previousPage,
                  canNextPage,
                  canPreviousPage,
                  pageCount,
                  setPageSize,
                  pageIndex,
                  pageSize,
                }}
              />
            </>
          )}
        </>
      )}
    </TableContainerDiv>
  );
};

export default LessTable;
