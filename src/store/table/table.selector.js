import { createSelector } from "reselect";

const selectTable = (state) => state.table;

export const selectTablePageSize = createSelector(
  [selectTable],
  (table) => table.tablePageSize
);
