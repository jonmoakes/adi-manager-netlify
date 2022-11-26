import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { selectEntry } from "../../../store/entry/entry.selector";
import { format } from "date-fns";

const useHandleUpdatedLessonEntryChange = () => {
  const [entry, setEntry] = useState({});
  const [updatedEntry, setUpdatedEntry] = useState({
    id: entry.id,
    date: entry.date,
    name: entry.name,
    startTime: entry.startTime,
    endTime: entry.endTime,
    paid: entry.paid,
    lessonSummary: entry.lessonSummary,
    nextLessonPlan: entry.nextLessonPlan,
    nextLessonDate: entry.nextLessonDate,
    nextLessonTime: entry.nextLessonTime,
    nextLessonPickup: entry.nextLessonPickup,
  });

  const [formattedLessonDate, setFormattedLessonDate] = useState("");
  const [formattedNextLessonDate, setFormattedNextLessonDate] = useState("");

  const reduxEntry = useSelector(selectEntry);
  useEffect(() => {
    setEntry(reduxEntry);
    setUpdatedEntry(reduxEntry);
  }, [reduxEntry]);

  useEffect(() => {
    if (entry.date) {
      setFormattedLessonDate(format(new Date(entry.date), "dd MMMM yyyy"));
    }

    if (entry.nextLessonDate) {
      setFormattedNextLessonDate(
        format(new Date(entry.nextLessonDate), "dd MMMM yyyy")
      );
    }
  }, [entry.date, entry.nextLessonDate]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUpdatedEntry({ ...updatedEntry, [name]: value });
  };

  return {
    entry,
    updatedEntry,
    formattedLessonDate,
    formattedNextLessonDate,
    handleChange,
  };
};

export default useHandleUpdatedLessonEntryChange;
