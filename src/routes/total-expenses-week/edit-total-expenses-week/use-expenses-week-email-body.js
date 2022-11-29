import { useSelector } from "react-redux";
import { format } from "date-fns";

import { selectEntry } from "../../../store/entry/entry.selector";

const useIncomeEmailBody = () => {
  const entry = useSelector(selectEntry);

  const emailBody = `Here%20Is%20Your%20Weekly%20Expense%20Invoice%20For%20The%20Week%20Ending%20On%20${format(
    new Date(entry.date),
    "dd MMMM yyyy"
  )}.%0D%0A%0D%0AReceipt%20Amount:%0D%0A£${entry.weeklyAmount}`;

  return { emailBody };
};

export default useIncomeEmailBody;
