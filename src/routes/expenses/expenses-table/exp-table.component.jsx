import { useMemo } from "react";
import { useSelector } from "react-redux";

import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
  useRowSelect,
} from "react-table";

import useExpensesEntriesSnapshotListener from "./use-expenses-entries-snapshot-listener";

import { selectExpensesEntries } from "../../../store/expenses/expenses.selector";
import { selectErrorMessage } from "../../../store/error/error.selector";
import { selectIsLoading } from "../../../store/loader/loader.selector";

import { COLUMNS } from "./columns";
import CheckBox from "../../../components/tables/checkbox";
import Loader from "../../../components/loader/loader.component";
import FetchError from "../../../components/fetch-error/fetch-error.component";
import NoEntriesInfo from "../../../components/tables/no-entries-info.component";
import MultipleEntriesInfo from "../../../components/tables/multiple-entries-info.component";
import CombinedTotal from "../../../components/tables/combined-total.component";
import SearchBox from "../../../components/tables/search-box.component";

import EditRemoveButtons from "../../../components/tables/edit-remove-buttons.component";
import TableWithColoredCells from "../../../components/tables/rendered-tables/table-with-colored-cells.component";
import Pagination from "../../../components/tables/pagination.component";

import { TableContainerDiv } from "../../../styles/div/div.styles";
import { TableHeaderRemoveText } from "../../../styles/span/span.styles";

import { scrollToTop } from "../../../reusable-functions/scroll-to-top";

import {
  deleteEntryPath,
  editExpenseEntryPath,
} from "../../../strings/strings";

const ExpTable = () => {
  useExpensesEntriesSnapshotListener();

  const errorMessage = useSelector(selectErrorMessage);
  let expensesEntries = useSelector(selectExpensesEntries);
  const isLoading = useSelector(selectIsLoading);

  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => expensesEntries, [expensesEntries]);

  const initialState = useMemo(
    () => ({ sortBy: [{ id: "date", desc: true }], pageSize: 25 }),
    []
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
  expensesEntries = chosenEntry;
  const dataLength = data.length;
  const rowsLength = rows.length;
  const chosenEntryLength = chosenEntry.length;
  const entries = expensesEntries;
  const editPath = editExpenseEntryPath;
  const deletePath = deleteEntryPath;

  const getSelectedAmounts = expensesEntries.map((entry) => {
    return Number(entry.amount);
  });

  const sum = getSelectedAmounts.reduce(
    (firstSelectedEntry, subsequentEntries) =>
      firstSelectedEntry + subsequentEntries,
    0
  );

  return (
    <TableContainerDiv>
      {isLoading && <Loader />}
      {errorMessage ? (
        <FetchError />
      ) : (
        <>
          <NoEntriesInfo {...{ dataLength }} />
          <MultipleEntriesInfo {...{ dataLength, chosenEntryLength }} />

          {!!data.length && (
            <>
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

              <CombinedTotal {...{ chosenEntryLength, sum }} />

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

export default ExpTable;
