import { format } from "date-fns";

export const COLUMNS = [
  {
    Header: "Year",
    accessor: "date",
    Cell: ({ value }) => {
      return format(new Date(value), "yyyy");
    },
  },
  {
    Header: "Total ( £ )",
    accessor: "yearlyAmount",
  },
];
