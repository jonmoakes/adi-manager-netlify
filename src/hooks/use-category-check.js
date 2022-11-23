import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { selectEntry } from "../store/entry/entry.selector";

import {
  diary,
  lessons,
  income,
  expenses,
  totalExpensesWeek,
  totalExpensesMonth,
  totalExpensesYear,
  pupils,
  blockBooking,
  progress,
} from "../strings/strings";

const useCategoryCheck = () => {
  const [category, setCategory] = useState("");
  const entry = useSelector(selectEntry);
  useEffect(() => {
    if (
      entry &&
      entry.hasOwnProperty("date") &&
      entry.hasOwnProperty("entry")
    ) {
      setCategory(diary);
    } else if (
      entry &&
      entry.hasOwnProperty("name") &&
      entry.hasOwnProperty("lessonSummary")
    ) {
      setCategory(lessons);
    } else if (
      entry &&
      entry.hasOwnProperty("paymentMethod") &&
      entry.hasOwnProperty("incomeReceived")
    ) {
      setCategory(income);
    } else if (entry && entry.hasOwnProperty("description")) {
      setCategory(expenses);
    } else if (entry && entry.hasOwnProperty("weeklyAmount")) {
      setCategory(totalExpensesWeek);
    } else if (entry && entry.hasOwnProperty("monthlyAmount")) {
      setCategory(totalExpensesMonth);
    } else if (entry && entry.hasOwnProperty("yearlyAmount")) {
      setCategory(totalExpensesYear);
    } else if (
      entry &&
      entry.hasOwnProperty("address") &&
      entry.hasOwnProperty("licenceNumber")
    ) {
      setCategory(pupils);
    } else if (
      entry &&
      entry.hasOwnProperty("balanceHoursRemaining") &&
      entry.hasOwnProperty("hoursPurchased")
    ) {
      setCategory(blockBooking);
    } else if (entry && entry.hasOwnProperty("dcGrade")) {
      setCategory(progress);
    } else return;
  }, [entry]);

  return { entry, category };
};

export default useCategoryCheck;
