import { TOTAL_EXPENSES_WEEK_ACTION_TYPES } from "./total-expenses-week.types";
import { createAction } from "../../utils/reducer/reducer.utils";

export const updateTotalExpensesWeekEntries = (payload) =>
  createAction(
    TOTAL_EXPENSES_WEEK_ACTION_TYPES.UPDATE_TOTAL_EXPENSES_WEEK_ENTRIES,
    payload
  );

export const clearTotalExpensesWeekEntries = () =>
  createAction(
    TOTAL_EXPENSES_WEEK_ACTION_TYPES.CLEAR_TOTAL_EXPENSES_WEEK_ENTRIES
  );
