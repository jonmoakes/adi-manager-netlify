import { PUPIL_PROGRESS_ACTION_TYPES } from "./pupil-progress.types";

const INITIAL_STATE = {
  pupilProgressEntries: [],
};

export const pupilProgressReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PUPIL_PROGRESS_ACTION_TYPES.UPDATE_PUPIL_PROGRESS_ENTRIES:
      return {
        ...state,
        pupilProgressEntries: action.payload,
      };
    case PUPIL_PROGRESS_ACTION_TYPES.CLEAR_PUPIL_PROGRESS_ENTRIES:
      return {
        ...state,
        pupilProgressEntries: [],
      };
    default:
      return state;
  }
};
