import { useSelector } from "react-redux";
import { format } from "date-fns";

import { selectEntry } from "../../../store/entry/entry.selector";

import { capitalizeString } from "../../../reusable-functions/capitalize-string";

const useExpensesEmailBody = () => {
  const entry = useSelector(selectEntry);

  const emailBody = `Here%20Is%20Your%20Expense%20Invoice%20Recorded%20On%20${format(
    new Date(entry.date),
    "dd MMMM yyyy"
  )}.%0D%0A%0D%0AReceipt%20Description:%0D%0A${capitalizeString(
    entry.description
  )}%0D%0A%0D%0AReceipt%20Amount:%0D%0A£${entry.amount}`;

  return { emailBody };
};

export default useExpensesEmailBody;
