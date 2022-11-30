import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const useHandleAddBlockBookingEntryChange = () => {
  const [entry, setEntry] = useState({
    id: uuidv4(),
    name: "",
    initialBlockBookingDate: "",
    hoursPurchased: "",
    latestLessonDate: "",
    latestLessonLength: "",
    balanceHoursRemaining: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEntry({ ...entry, [name]: value });
  };

  return { entry, handleChange };
};

export default useHandleAddBlockBookingEntryChange;
