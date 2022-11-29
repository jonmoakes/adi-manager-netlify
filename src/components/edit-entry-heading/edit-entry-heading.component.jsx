import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Div } from "../../styles/div/div.styles";
import { Heading } from "../../styles/h1/h1.styles";

import {
  editDiaryEntryPath,
  editLessonEntryPath,
  editIncomeEntryPath,
  editExpenseEntryPath,
  editTotalExpensesWeekEntryPath,
  editTotalExpensesMonthEntryPath,
  editTotalExpensesYearEntryPath,
  editBlockBookingEntryPath,
  editPupilEntryPath,
  editPupilProgressEntryPath,
  diary,
  lesson,
  income,
  expense,
  totalExpensesWeek,
  totalExpensesMonth,
  totalExpensesYear,
  pupil,
  blockBooking,
  progress,
} from "../../strings/strings";

const EditEntryHeading = () => {
  const [categoryName, setCategoryName] = useState("");
  const location = useLocation();
  const path = location.pathname;

  useEffect(() => {
    if (path === editDiaryEntryPath) {
      setCategoryName(diary);
    } else if (path === editLessonEntryPath) {
      setCategoryName(lesson);
    } else if (path === editIncomeEntryPath) {
      setCategoryName(income);
    } else if (path === editExpenseEntryPath) {
      setCategoryName(expense);
    } else if (path === editTotalExpensesWeekEntryPath) {
      setCategoryName(totalExpensesWeek);
    } else if (path === editTotalExpensesMonthEntryPath) {
      setCategoryName(totalExpensesMonth);
    } else if (path === editTotalExpensesYearEntryPath) {
      setCategoryName(totalExpensesYear);
    } else if (path === editBlockBookingEntryPath) {
      setCategoryName(blockBooking);
    } else if (path === editPupilEntryPath) {
      setCategoryName(pupil);
    } else if (path === editPupilProgressEntryPath) {
      setCategoryName(progress);
    }
  }, [path]);

  return (
    <Div>
      <Heading>View / Edit {categoryName} Entry</Heading>
    </Div>
  );
};
export default EditEntryHeading;
