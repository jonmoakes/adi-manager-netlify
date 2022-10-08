import { createSelector } from "reselect";

const selectTable = (state) => state.table;

export const selectOrders = createSelector(
  [selectTable],
  (table) => table.orders
);

export const selectUserOrders = createSelector(
  [selectTable],
  (table) => table.userOrders
);

export const selectTableErrorMessage = (state) => state.table.tableErrorMessage;
