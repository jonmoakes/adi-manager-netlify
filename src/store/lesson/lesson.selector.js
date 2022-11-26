import { createSelector } from "reselect";

const selectLesson = (state) => state.lesson;

export const selectLessonEntries = createSelector([selectLesson], (lesson) =>
  lesson ? lesson.lessonEntries : null
);
