import { INCOME_ACTION_TYPES } from "./income.types";
import { createAction } from "../../utils/reducer/reducer.utils";

export const updateIncomeEntries = (payload) =>
  createAction(INCOME_ACTION_TYPES.UPDATE_INCOME_ENTRIES, payload);

export const clearIncomeEntries = () =>
  createAction(INCOME_ACTION_TYPES.CLEAR_INCOME_ENTRIES);
