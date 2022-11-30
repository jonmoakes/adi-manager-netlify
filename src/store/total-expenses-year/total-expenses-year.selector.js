import { createSelector } from "reselect";

const selectTotalExpensesYear = (state) => state.totalExpensesYear;

export const selectTotalExpensesYearEntries = createSelector(
  [selectTotalExpensesYear],
  (totalExpensesYear) =>
    totalExpensesYear ? totalExpensesYear.totalExpensesYearEntries : null
);
