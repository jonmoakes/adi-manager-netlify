import { PUPILS_ACTION_TYPES } from "./pupils.types";
import { createAction } from "../../utils/reducer/reducer.utils";

export const updatePupilsEntries = (payload) =>
  createAction(PUPILS_ACTION_TYPES.UPDATE_PUPILS_ENTRIES, payload);

export const clearPupilsEntries = () =>
  createAction(PUPILS_ACTION_TYPES.CLEAR_PUPILS_ENTRIES);
