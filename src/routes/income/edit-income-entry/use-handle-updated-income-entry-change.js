import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { selectEntry } from "../../../store/entry/entry.selector";
import { format } from "date-fns";

const useHandleUpdatedIncomeEntryChange = () => {
  const [entry, setEntry] = useState({});
  const [updatedEntry, setUpdatedEntry] = useState({
    id: entry.id,
    date: entry.date,
    name: entry.name,
    incomeReceived: entry.incomeReceived,
    blockBooking: entry.blockBooking,
    paymentMethod: entry.paymentMethod,
  });
  const [formattedIncomeDate, setFormattedIncomeDate] = useState("");

  const reduxEntry = useSelector(selectEntry);

  useEffect(() => {
    setEntry(reduxEntry);
    setUpdatedEntry(reduxEntry);
  }, [reduxEntry]);

  useEffect(() => {
    if (entry.date) {
      setFormattedIncomeDate(format(new Date(entry.date), "dd MMMM yyyy"));
    }
  }, [entry.date]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUpdatedEntry({ ...updatedEntry, [name]: value });
  };

  return { entry, updatedEntry, formattedIncomeDate, handleChange };
};

export default useHandleUpdatedIncomeEntryChange;
