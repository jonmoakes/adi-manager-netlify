import { createSelector } from "reselect";

const selectDiary = (state) => state.diary;

export const selectDiaryEntries = createSelector([selectDiary], (diary) =>
  diary ? diary.diaryEntries : null
);
