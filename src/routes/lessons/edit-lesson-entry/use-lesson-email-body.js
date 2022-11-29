import { useSelector } from "react-redux";
import { format } from "date-fns";

import { selectEntry } from "../../../store/entry/entry.selector";

import { capitalizeString } from "../../../reusable-functions/capitalize-string";

const useLessonEmailBody = () => {
  const entry = useSelector(selectEntry);

  const emailBody = `Hi,%0D%0A%0D%0AHere%20Are%20The%20Details%20Of%20Your%20Driving%20Lesson%20On%20${format(
    new Date(entry.date),
    "dd MMMM yyyy"
  )}.%0D%0A(%20If%20Blank,%20Data%20Has%20Not%20Been%20Provided )%0D%0A%0D%0AName:%0D%0A${capitalizeString(
    entry.name
  )}%0D%0A%0D%0AStart%20Time:%0D%0A${
    entry.startTime
  }%0D%0A%0D%0AEnd%20Time:%0D%0A${
    entry.endTime
  }%0D%0A%0D%0ALesson%20Paid%20For:%0D%0A${
    entry.paid
  }%0D%0A%0D%0ALesson%20Summary:%0D%0A${capitalizeString(
    entry.lessonSummary
  )}%0D%0A%0D%0ANext%20Lesson%20Plan:%0D%0A${capitalizeString(
    entry.nextLessonPlan
  )}%0D%0A%0D%0ANext%20Lesson%20Date:%0D%0A${
    entry.nextLessonDate &&
    format(new Date(entry.nextLessonDate), "dd MMMM yyyy")
  }%0D%0A%0D%0ANext%20Lesson%20Time:%0D%0A${
    entry.nextLessonTime
  }%0D%0A%0D%0ANext%20Lesson%20Pickup:%0D%0A${capitalizeString(
    entry.nextLessonPickup
  )}%0D%0A%0D%0AKind%20Regards,`;

  return { emailBody };
};

export default useLessonEmailBody;
