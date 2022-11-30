import { useSelector } from "react-redux";
import { format } from "date-fns";

import { selectEntry } from "../../../store/entry/entry.selector";

import { capitalizeString } from "../../../reusable-functions/capitalize-string";

const useBlockBookingEmailBody = () => {
  const entry = useSelector(selectEntry);

  const emailBody = `Hi,%0D%0A%0D%0AHere%20Are%20The%20Details%20Of%20Your%20Block%20Booking,%20Updated%20After%20Today's%20Lesson.%0D%0A%0D%0AName:%0D%0A${capitalizeString(
    entry.name
  )}%0D%0A%0D%0AInitial%20Booking%20Date:%0D%0A${format(
    new Date(entry.initialBlockBookingDate),
    "dd MMMM yyyy"
  )}%0D%0A%0D%0AHours%20Purchased:%0D%0A${
    entry.hoursPurchased
  }%0D%0A%0D%0ALatest%20Lesson%20Date:%0D%0A${format(
    new Date(entry.latestLessonDate),
    "dd MMMM yyyy"
  )}%0D%0A%0D%0ALatest%20Lesson%20Length:%0D%0A${
    entry.latestLessonLength
  }%0D%0A%0D%0ABalance%20Hours%20Remaining%20AFTER%20Latest%20Lesson%20Completed:%0D%0A${
    entry.balanceHoursRemaining
  }%0D%0A%0D%0AKind%20Regards,`;

  return { emailBody };
};

export default useBlockBookingEmailBody;
