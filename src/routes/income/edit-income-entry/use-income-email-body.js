import { useSelector } from "react-redux";
import { format } from "date-fns";

import { selectEntry } from "../../../store/entry/entry.selector";

import { capitalizeString } from "../../../reusable-functions/capitalize-string";

const useIncomeEmailBody = () => {
  const entry = useSelector(selectEntry);

  const emailBody = `Hi,%0D%0A%0D%0AHere%20Is%20Your%20Driving%20Lesson%20Receipt%20For%20${format(
    new Date(entry.date),
    "dd MMMM yyyy"
  )}.%0D%0A(%20If%20Blank,%20Data%20Has%20Not%20Been%20Provided )%0D%0A%0D%0AName:%0D%0A${capitalizeString(
    entry.name
  )}%0D%0A%0D%0APayment%20Amount:%0D%0A£${
    entry.incomeReceived
  }%0D%0A%0D%0APart%20Of%20A%20Block%20Booking:%0D%0A${
    entry.blockBooking !== "select" ? entry.blockBooking : ""
  }%0D%0A%0D%0APayment%20Method:%0D%0A${
    entry.paymentMethod !== "select" ? entry.paymentMethod : ""
  }%0D%0A%0D%0AKind%20Regards,`;

  return { emailBody };
};

export default useIncomeEmailBody;
