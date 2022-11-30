import { TOTAL_EXPENSES_YEAR_ACTION_TYPES } from "./total-expenses-year.types";
import { createAction } from "../../utils/reducer/reducer.utils";

export const updateTotalExpensesYearEntries = (payload) =>
  createAction(
    TOTAL_EXPENSES_YEAR_ACTION_TYPES.UPDATE_TOTAL_EXPENSES_YEAR_ENTRIES,
    payload
  );

export const clearTotalExpensesYearEntries = () =>
  createAction(
    TOTAL_EXPENSES_YEAR_ACTION_TYPES.CLEAR_TOTAL_EXPENSES_YEAR_ENTRIES
  );
