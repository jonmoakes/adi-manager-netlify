import { format } from "date-fns";

export const COLUMNS = [
  {
    Header: "Date",
    accessor: "date",
    Cell: ({ value }) => {
      return format(new Date(value), "dd MMMM yyyy");
    },
  },
  {
    Header: "Receipt Description",
    accessor: "description",
  },
  {
    Header: "Receipt Amount ( £ )",
    accessor: "amount",
  },
];
