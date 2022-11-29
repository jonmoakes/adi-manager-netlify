import { createSelector } from "reselect";

const selectExpenses = (state) => state.expenses;

export const selectExpensesEntries = createSelector(
  [selectExpenses],
  (expenses) => (expenses ? expenses.expensesEntries : null)
);
