import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const useHandleAddLessonEntryChange = () => {
  const [entry, setEntry] = useState({
    id: uuidv4(),
    date: "",
    name: "",
    startTime: "",
    endTime: "",
    paid: "select",
    lessonSummary: "",
    nextLessonPlan: "",
    nextLessonDate: "",
    nextLessonTime: "",
    nextLessonPickup: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEntry({ ...entry, [name]: value });
  };

  return { entry, handleChange };
};

export default useHandleAddLessonEntryChange;
