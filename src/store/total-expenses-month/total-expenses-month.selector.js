import { createSelector } from "reselect";

const selectTotalExpensesMonth = (state) => state.totalExpensesMonth;

export const selectTotalExpensesMonthEntries = createSelector(
  [selectTotalExpensesMonth],
  (totalExpensesMonth) =>
    totalExpensesMonth ? totalExpensesMonth.totalExpensesMonthEntries : null
);
