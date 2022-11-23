import { createSelector } from "reselect";

const selectChosenEntry = (state) => state.entry;

export const selectEntry = createSelector([selectChosenEntry], (entry) =>
  entry ? entry.entry : null
);
