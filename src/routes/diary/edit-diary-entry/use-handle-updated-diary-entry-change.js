import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const useHandleUpdatedDiaryEntryChange = () => {
  const [entry, setEntry] = useState({});
  const [updatedEntry, setUpdatedEntry] = useState({
    id: entry.id,
    date: entry.date,
    entry: entry.entry,
  });

  const location = useLocation();

  useEffect(() => {
    setEntry(location.state.entry);
    setUpdatedEntry(location.state.entry);
  }, [location.state.entry]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUpdatedEntry({ ...updatedEntry, [name]: value });
  };

  return { entry, updatedEntry, handleChange };
};

export default useHandleUpdatedDiaryEntryChange;
