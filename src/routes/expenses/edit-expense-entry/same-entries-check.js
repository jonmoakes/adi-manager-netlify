export const sameEntriesCheck = (updatedEntry, entry) => {
  if (
    updatedEntry.date === entry.date &&
    updatedEntry.description === entry.description &&
    updatedEntry.amount === entry.amount
  ) {
    return true;
  } else {
    return false;
  }
};
