import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import {
  addDiaryEntryPath,
  addLessonEntryPath,
  addIncomeEntryPath,
  addExpensesEntryPath,
  addTotalExpensesWeekEntryPath,
  addTotalExpensesMonthEntryPath,
  addTotalExpensesYearEntryPath,
  addPupilEntryPath,
  addBlockBookingsEntryPath,
  addPupilProgressEntryPath,
  aDiary,
  aLesson,
  anIncome,
  anExpense,
  aWeeklyTotalExpenses,
  aMonthlyTotalExpenses,
  aYearlyTotalExpenses,
  aPupil,
  aBlockBooking,
  aProgress,
} from "../../strings/strings";

const useDisplayEntryHeading = () => {
  const [categoryName, setCategoryName] = useState("");
  const location = useLocation();
  const path = location.pathname;

  useEffect(() => {
    if (path === addDiaryEntryPath) {
      setCategoryName(aDiary);
    } else if (path === addLessonEntryPath) {
      setCategoryName(aLesson);
    } else if (path === addIncomeEntryPath) {
      setCategoryName(anIncome);
    } else if (path === addExpensesEntryPath) {
      setCategoryName(anExpense);
    } else if (path === addTotalExpensesWeekEntryPath) {
      setCategoryName(aWeeklyTotalExpenses);
    } else if (path === addTotalExpensesMonthEntryPath) {
      setCategoryName(aMonthlyTotalExpenses);
    } else if (path === addTotalExpensesYearEntryPath) {
      setCategoryName(aYearlyTotalExpenses);
    } else if (path === addPupilEntryPath) {
      setCategoryName(aPupil);
    } else if (path === addBlockBookingsEntryPath) {
      setCategoryName(aBlockBooking);
    } else if (path === addPupilProgressEntryPath) {
      setCategoryName(aProgress);
    }
  }, [path]);

  return { categoryName };
};

export default useDisplayEntryHeading;
