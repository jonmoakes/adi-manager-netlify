import { ENTRY_ACTION_TYPES } from "./entry.types";
import { createAction } from "../../utils/reducer/reducer.utils";

export const addEntry = (payload) =>
  createAction(ENTRY_ACTION_TYPES.ADD_ENTRY, payload);

export const clearEntry = () => createAction(ENTRY_ACTION_TYPES.CLEAR_ENTRY);
