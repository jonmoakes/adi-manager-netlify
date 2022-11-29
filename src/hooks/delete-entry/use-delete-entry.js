import useDeleteDiaryEntry from "./categories/use-delete-diary-entry";
import useDeleteLessonEntry from "./categories/use-delete-lesson-entry";
import useDeleteIncomeEntry from "./categories/use-delete-income-entry";
import useDeleteExpenseEntry from "./categories/use-delete-expense-entry";
import useDeleteTotalExpensesWeekEntry from "./categories/use-delete-total-expenses-week";
import useDeleteTotalExpensesMonthEntry from "./categories/use-delete-total-expenses-month";
// import useDeleteTotalExpensesYearEntry from "./categories/use-delete-total-expenses-year";
// import useDeletePupilEntry from "./categories/use-delete-pupil-entry";
// import useDeleteBlockBookingEntry from "./categories/use-delete-block-booking-entry";
// import useDeleteProgressEntry from "./categories/use-delete-progress-entry";

// receives the entry that was added in the respective deleteEntryPage component.
// conditionally deletes the correct entry based on the category received which is based on object properties existing.

const useDeleteEntry = () => {
  const { deleteDiaryEntry } = useDeleteDiaryEntry();
  const { deleteLessonEntry } = useDeleteLessonEntry();
  const { deleteIncomeEntry } = useDeleteIncomeEntry();
  const { deleteExpenseEntry } = useDeleteExpenseEntry();
  const { deleteTotalExpensesWeekEntry } = useDeleteTotalExpensesWeekEntry();
  const { deleteTotalExpensesMonthEntry } = useDeleteTotalExpensesMonthEntry();
  // const { deleteTotalExpensesYearEntry } = useDeleteTotalExpensesYearEntry();
  // const { deletePupilEntry } = useDeletePupilEntry();
  // const { deleteBlockBookingEntry } = useDeleteBlockBookingEntry();
  // const { deleteProgressEntry } = useDeleteProgressEntry();

  const deleteEntry = () => {
    deleteDiaryEntry();
    deleteLessonEntry();
    deleteIncomeEntry();
    deleteExpenseEntry();
    deleteTotalExpensesWeekEntry();
    deleteTotalExpensesMonthEntry();
    // deleteTotalExpensesYearEntry();
    // deletePupilEntry();
    // deleteBlockBookingEntry();
    // deleteProgressEntry();
  };

  return { deleteEntry };
};

export default useDeleteEntry;
