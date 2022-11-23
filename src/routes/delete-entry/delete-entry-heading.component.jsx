import { format } from "date-fns";

import useCategoryCheck from "../../hooks/use-category-check";

import { Div } from "../../styles/div/div.styles";
import { Heading } from "../../styles/h1/h1.styles";

import {
  diary,
  lessons,
  income,
  expenses,
  totalExpensesWeek,
  totalExpensesMonth,
  totalExpensesYear,
  pupils,
  blockBooking,
  progress,
} from "../../strings/strings";

const DeleteEntryHeading = () => {
  const { entry, category } = useCategoryCheck();

  return (
    <Div>
      {!entry
        ? null
        : (category === pupils ||
            category === progress ||
            category === blockBooking) && (
            <Heading>
              remove {entry.name}'s {category} entry
            </Heading>
          )}

      {!entry
        ? null
        : category === totalExpensesMonth && (
            <Heading>
              remove {category} entry for
              <br />
              {format(new Date(entry.date), "MMMM yyyy")}
            </Heading>
          )}

      {!entry
        ? null
        : category === totalExpensesYear && (
            <Heading>
              remove {category} entry for
              <br />
              {format(new Date(entry.date), "yyyy")}
            </Heading>
          )}

      {!entry
        ? null
        : (category === diary ||
            category === lessons ||
            category === income ||
            category === expenses ||
            category === totalExpensesWeek) && (
            <Heading>
              remove {category} entry for
              <br />
              {format(new Date(entry.date), "dd MMMM yyyy")}
            </Heading>
          )}
    </Div>
  );
};

export default DeleteEntryHeading;
