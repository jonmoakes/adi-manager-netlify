import { PUPILS_ACTION_TYPES } from "./pupils.types";

const INITIAL_STATE = {
  pupilsEntries: [],
};

export const pupilsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PUPILS_ACTION_TYPES.UPDATE_PUPILS_ENTRIES:
      return {
        ...state,
        pupilsEntries: action.payload,
      };
    case PUPILS_ACTION_TYPES.CLEAR_PUPILS_ENTRIES:
      return {
        ...state,
        pupilsEntries: [],
      };
    default:
      return state;
  }
};
