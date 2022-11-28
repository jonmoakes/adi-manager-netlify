import { createSelector } from "reselect";

const selectIncome = (state) => state.income;

export const selectIncomeEntries = createSelector([selectIncome], (income) =>
  income ? income.incomeEntries : null
);
