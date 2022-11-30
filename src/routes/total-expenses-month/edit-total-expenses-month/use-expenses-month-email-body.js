import { useSelector } from "react-redux";
import { format } from "date-fns";

import { selectEntry } from "../../../store/entry/entry.selector";

const useExpensesMonthEmailBody = () => {
  const entry = useSelector(selectEntry);

  const emailBody = `Here%20Is%20Your%20Expense%20Invoice%20For%20The%20Month%20Of%20${format(
    new Date(entry.date),
    "MMMM yyyy"
  )}.%0D%0A%0D%0AReceipt%20Amount:%0D%0A£${entry.monthlyAmount}`;

  return { emailBody };
};

export default useExpensesMonthEmailBody;
