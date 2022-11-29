import { TOTAL_EXPENSES_MONTH_ACTION_TYPES } from "./total-expenses-month.types";
import { createAction } from "../../utils/reducer/reducer.utils";

export const updateTotalExpensesMonthEntries = (payload) =>
  createAction(
    TOTAL_EXPENSES_MONTH_ACTION_TYPES.UPDATE_TOTAL_EXPENSES_MONTH_ENTRIES,
    payload
  );

export const clearTotalExpensesMonthEntries = () =>
  createAction(
    TOTAL_EXPENSES_MONTH_ACTION_TYPES.CLEAR_TOTAL_EXPENSES_MONTH_ENTRIES
  );
