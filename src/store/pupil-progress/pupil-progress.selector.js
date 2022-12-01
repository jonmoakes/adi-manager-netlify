import { createSelector } from "reselect";

const selectPupilProgress = (state) => state.pupilProgress;

export const selectPupilProgressEntries = createSelector(
  [selectPupilProgress],
  (pupilProgress) => (pupilProgress ? pupilProgress.pupilProgressEntries : null)
);
