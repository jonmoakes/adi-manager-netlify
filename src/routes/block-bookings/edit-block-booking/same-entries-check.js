export const sameEntriesCheck = (updatedEntry, entry) => {
  if (
    updatedEntry.name === entry.name &&
    updatedEntry.initialBlockBookingDate === entry.initialBlockBookingDate &&
    updatedEntry.hoursPurchased === entry.hoursPurchased &&
    updatedEntry.latestLessonDate === entry.latestLessonDate &&
    updatedEntry.latestLessonLength === entry.latestLessonLength &&
    updatedEntry.balanceHoursRemaining === entry.balanceHoursRemaining
  ) {
    return true;
  } else {
    return false;
  }
};
