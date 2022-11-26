import { LESSON_ACTION_TYPES } from "./lesson.types";

const INITIAL_STATE = {
  lessonEntries: [],
};

export const lessonReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LESSON_ACTION_TYPES.UPDATE_LESSON_ENTRIES:
      return {
        ...state,
        lessonEntries: action.payload,
      };
    case LESSON_ACTION_TYPES.CLEAR_LESSON_ENTRIES:
      return {
        ...state,
        lessonEntries: [],
      };
    default:
      return state;
  }
};
