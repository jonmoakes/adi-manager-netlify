import { format } from "date-fns";

export const COLUMNS = [
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Latest Lesson Date",
    accessor: "latestLessonDate",
    Cell: ({ value }) => {
      return format(new Date(value), "dd MMMM yyyy");
    },
  },
  {
    Header: "Balance Hours Remaining",
    accessor: "balanceHoursRemaining",
  },
];
