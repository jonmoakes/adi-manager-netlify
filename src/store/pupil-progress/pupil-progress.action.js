import { PUPIL_PROGRESS_ACTION_TYPES } from "./pupil-progress.types";
import { createAction } from "../../utils/reducer/reducer.utils";

export const updatePupilProgressEntries = (payload) =>
  createAction(
    PUPIL_PROGRESS_ACTION_TYPES.UPDATE_PUPIL_PROGRESS_ENTRIES,
    payload
  );

export const clearLessonEntries = () =>
  createAction(PUPIL_PROGRESS_ACTION_TYPES.CLEAR_PUPIL_PROGRESS_ENTRIES);
