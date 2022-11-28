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
    Header: "Pupil Name",
    accessor: "name",
  },
  {
    Header: "Income Received ( £ )",
    accessor: "incomeReceived",
  },
];
