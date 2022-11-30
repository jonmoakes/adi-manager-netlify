import { useSelector } from "react-redux";
import { format } from "date-fns";

import { selectEntry } from "../../../store/entry/entry.selector";

const useExpensesYearEmailBody = () => {
  const entry = useSelector(selectEntry);

  const emailBody = `Here%20Is%20Your%20Expense%20Invoice%20For%20The%20Year%20${format(
    new Date(entry.date),
    "yyyy"
  )}.%0D%0A%0D%0AReceipt%20Amount:%0D%0A£${entry.yearlyAmount}`;

  return { emailBody };
};

export default useExpensesYearEmailBody;
