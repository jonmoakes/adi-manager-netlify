import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { selectEntry } from "../../../store/entry/entry.selector";

const useHandleUpdatedDiaryEntryChange = () => {
  const [entry, setEntry] = useState({});
  const [updatedEntry, setUpdatedEntry] = useState({
    id: entry.id,
    date: entry.date,
    entry: entry.entry,
  });

  const reduxEntry = useSelector(selectEntry);

  useEffect(() => {
    setEntry(reduxEntry);
    setUpdatedEntry(reduxEntry);
  }, [reduxEntry]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUpdatedEntry({ ...updatedEntry, [name]: value });
  };

  return { entry, updatedEntry, handleChange };
};

export default useHandleUpdatedDiaryEntryChange;
