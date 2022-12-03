import { useSelector } from "react-redux";
import { format } from "date-fns";

import { selectEntry } from "../../../../store/entry/entry.selector";

import { capitalizeString } from "../../../../reusable-functions/capitalize-string";

const usePupilProgressEmailBody = () => {
  const entry = useSelector(selectEntry);

  const emailBody = `Hi,%0D%0A%0D%0AHere%20Is%20Your%20Latest%20Lesson%20Performance%20Summary.%0D%0A(%20If%20Blank,%20Data%20Has%20Not%20Been%20Provided )%0D%0A%0D%0APupil%20Name:%0D%0A${capitalizeString(
    entry.name
  )}%0D%0A%0D%0ALatest%20Lesson%20Date:%0D%0A${
    entry.latestLessonDate
      ? format(new Date(entry.latestLessonDate), "dd MMMM yyyy")
      : ""
  }%0D%0A%0D%0APerformance%20Grading ( Out Of 5 ):%0D%0A${
    entry.latestLessonGrade ? entry.latestLessonGrade : ""
  }%0D%0A%0D%0ASummary:%0D%0A${
    entry.latestLessonPerformanceSummary
      ? capitalizeString(entry.latestLessonPerformanceSummary)
      : ""
  }%0D%0A%0D%0AKind%20Regards,`;

  return { emailBody };
};

export default usePupilProgressEmailBody;
