import { DIARY_ACTION_TYPES } from "./diary.types";

const INITIAL_STATE = {
  diaryEntries: [],
};

export const diaryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DIARY_ACTION_TYPES.UPDATE_DIARY_ENTRIES:
      return {
        ...state,
        diaryEntries: action.payload,
      };
    case DIARY_ACTION_TYPES.CLEAR_DIARY_ENTRIES:
      return {
        ...state,
        diaryEntries: [],
      };
    default:
      return state;
  }
};
