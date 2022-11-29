import { format } from "date-fns";

export const COLUMNS = [
  {
    Header: "Month Of",
    accessor: "date",
    Cell: ({ value }) => {
      return format(new Date(value), "MMMM yyyy");
    },
  },
  {
    Header: "Total ( £ )",
    accessor: "monthlyAmount",
  },
];
