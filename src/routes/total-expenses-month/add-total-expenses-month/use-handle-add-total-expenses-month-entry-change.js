import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const useHandleAddTotalExpensesMonthEntryChange = () => {
  const [entry, setEntry] = useState({
    id: uuidv4(),
    date: "",
    monthlyAmount: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEntry({ ...entry, [name]: value });
  };

  return { entry, handleChange };
};

export default useHandleAddTotalExpensesMonthEntryChange;
