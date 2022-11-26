import { LESSON_ACTION_TYPES } from "./lesson.types";
import { createAction } from "../../utils/reducer/reducer.utils";

export const updateLessonEntries = (payload) =>
  createAction(LESSON_ACTION_TYPES.UPDATE_LESSON_ENTRIES, payload);

export const clearLessonEntries = () =>
  createAction(LESSON_ACTION_TYPES.CLEAR_LESSON_ENTRIES);
