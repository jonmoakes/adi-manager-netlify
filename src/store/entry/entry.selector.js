import { createSelector } from "reselect";

const selectChosenEntry = (state) => state.entry;

export const selectEntry = createSelector([selectChosenEntry], (entry) =>
  entry ? entry.entry : null
);

export const selectUpdatedEntry = createSelector([selectChosenEntry], (entry) =>
  entry ? entry.updatedEntry : null
);
