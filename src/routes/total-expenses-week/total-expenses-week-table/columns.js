import { format } from "date-fns";

export const COLUMNS = [
  {
    Header: "Week Ending Date",
    accessor: "date",
    Cell: ({ value }) => {
      return format(new Date(value), "dd MMMM yyyy");
    },
  },
  {
    Header: "Total ( £ )",
    accessor: "weeklyAmount",
  },
];
