import { createSelector } from "reselect";

const selectPupils = (state) => state.pupils;

export const selectPupilsEntries = createSelector([selectPupils], (pupils) =>
  pupils ? pupils.pupilsEntries : null
);
