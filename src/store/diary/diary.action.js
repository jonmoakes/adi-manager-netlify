import { DIARY_ACTION_TYPES } from "./diary.types";
import { createAction } from "../../utils/reducer/reducer.utils";

export const updateDiaryEntries = (payload) =>
  createAction(DIARY_ACTION_TYPES.UPDATE_DIARY_ENTRIES, payload);

export const clearDiaryEntries = () =>
  createAction(DIARY_ACTION_TYPES.CLEAR_DIARY_ENTRIES);
