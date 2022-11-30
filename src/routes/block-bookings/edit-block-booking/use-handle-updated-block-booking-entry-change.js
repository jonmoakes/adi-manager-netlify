import { useState } from "react";
import { useSelector } from "react-redux";

import { selectEntry } from "../../../store/entry/entry.selector";

const useHandleUpdatedBlockBookingEntryChange = () => {
  const entry = useSelector(selectEntry);

  const [updatedEntry, setUpdatedEntry] = useState({
    id: entry.id,
    name: entry.name,
    initialBlockBookingDate: entry.initialBlockBookingDate,
    hoursPurchased: entry.hoursPurchased,
    latestLessonDate: entry.latestLessonDate,
    latestLessonLength: entry.latestLessonLength,
    balanceHoursRemaining: entry.balanceHoursRemaining,
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

export default useHandleUpdatedBlockBookingEntryChange;
