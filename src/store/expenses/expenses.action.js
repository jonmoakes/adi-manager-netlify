import { EXPENSES_ACTION_TYPES } from "./expenses.types";
import { createAction } from "../../utils/reducer/reducer.utils";

export const updateExpensesEntries = (payload) =>
  createAction(EXPENSES_ACTION_TYPES.UPDATE_EXPENSES_ENTRIES, payload);

export const clearExpensesEntries = () =>
  createAction(EXPENSES_ACTION_TYPES.CLEAR_EXPENSES_ENTRIES);
