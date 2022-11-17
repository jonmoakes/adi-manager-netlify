import { format } from "date-fns";

// sortType has to receive a date object which is why the date string is converted to one in the table component.
export const COLUMNS = [
  {
    Header: "Date",
    accessor: "date",
    sortType: "datetime",

    Cell: ({ value }) => {
      return format(new Date(value), "dd MMMM yyyy");
    },
  },
  {
    Header: "Entry",
    accessor: "entry",
  },
];
