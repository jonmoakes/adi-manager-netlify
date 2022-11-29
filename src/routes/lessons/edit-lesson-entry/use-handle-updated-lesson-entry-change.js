import { useState } from "react";
import { useSelector } from "react-redux";

import { selectEntry } from "../../../store/entry/entry.selector";

const useHandleUpdatedLessonEntryChange = () => {
  const entry = useSelector(selectEntry);

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

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUpdatedEntry({ ...updatedEntry, [name]: value });
  };

  return {
    entry,
    updatedEntry,
    handleChange,
  };
};

export default useHandleUpdatedLessonEntryChange;
