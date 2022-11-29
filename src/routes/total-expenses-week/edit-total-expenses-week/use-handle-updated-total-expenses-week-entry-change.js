import { useState } from "react";
import { useSelector } from "react-redux";

import { selectEntry } from "../../../store/entry/entry.selector";

const useHandleUpdatedTotalExpensesWeekEntryChange = () => {
  const entry = useSelector(selectEntry);

  const [updatedEntry, setUpdatedEntry] = useState({
    id: entry.id,
    date: entry.date,
    weeklyAmount: entry.weeklyAmount,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUpdatedEntry({ ...updatedEntry, [name]: value });
  };

  return { entry, updatedEntry, handleChange };
};

export default useHandleUpdatedTotalExpensesWeekEntryChange;
