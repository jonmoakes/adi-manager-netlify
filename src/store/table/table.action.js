import { TABLE_ACTION_TYPES } from "./table.types";
import { createAction } from "../../utils/reducer/reducer.utils";

export const setTablePageSize = (payload) =>
  createAction(TABLE_ACTION_TYPES.SET_TABLE_PAGE_SIZE, payload);
