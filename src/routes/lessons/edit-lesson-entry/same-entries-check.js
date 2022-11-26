export const sameEntriesCheck = (updatedEntry, entry) => {
  if (
    updatedEntry.date === entry.date &&
    updatedEntry.name === entry.name &&
    updatedEntry.startTime === entry.startTime &&
    updatedEntry.endTime === entry.endTime &&
    updatedEntry.paid === entry.paid &&
    updatedEntry.lessonSummary === entry.lessonSummary &&
    updatedEntry.nextLessonPlan === entry.nextLessonPlan &&
    updatedEntry.nextLessonDate === entry.nextLessonDate &&
    updatedEntry.nextLessonTime === entry.nextLessonTime &&
    updatedEntry.nextLessonPickup === entry.nextLessonPickup
  ) {
    return true;
  } else {
    return false;
  }
};
