import { createSelector } from "reselect";

const selectTotalExpensesWeek = (state) => state.totalExpensesWeek;

export const selectTotalExpensesWeekEntries = createSelector(
  [selectTotalExpensesWeek],
  (totalExpensesWeek) =>
    totalExpensesWeek ? totalExpensesWeek.totalExpensesWeekEntries : null
);
