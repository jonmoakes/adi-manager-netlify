import { useMemo } from "react";
import { useSelector } from "react-redux";

import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
  useRowSelect,
} from "react-table";

import useBlockBookingsEntriesSnapshotListener from "./use-block-bookings-entries-snapshot-listener";

import { selectBlockBookingEntries } from "../../../store/block-booking/block-booking.selector";
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
import DefaultTable from "../../../components/tables/rendered-tables/default-table.component";
import Pagination from "../../../components/tables/pagination.component";

import { TableContainerDiv } from "../../../styles/div/div.styles";
import { TableHeaderRemoveText } from "../../../styles/span/span.styles";

import { scrollToTop } from "../../../reusable-functions/scroll-to-top";

import {
  deleteEntryPath,
  editBlockBookingEntryPath,
} from "../../../strings/strings";

const BlockTable = () => {
  useBlockBookingsEntriesSnapshotListener();

  const errorMessage = useSelector(selectErrorMessage);
  let blockBookingEntries = useSelector(selectBlockBookingEntries);
  const isLoading = useSelector(selectIsLoading);
  const tablePageSize = useSelector(selectTablePageSize);

  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => blockBookingEntries, [blockBookingEntries]);
  const initialState = useMemo(
    () => ({ sortBy: [{ id: "name", desc: false }], pageSize: tablePageSize }),
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
  blockBookingEntries = chosenEntry;
  const dataLength = data.length;
  const rowsLength = rows.length;
  const chosenEntryLength = chosenEntry.length;
  const entries = blockBookingEntries;
  const editPath = editBlockBookingEntryPath;
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

              <DefaultTable
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

export default BlockTable;
