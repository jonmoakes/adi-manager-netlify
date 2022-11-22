import { useLocation, Link } from "react-router-dom";
import { format } from "date-fns";

import { TableEditsButtonDiv } from "../../styles/div/div.styles";
import {
  EditEntryButton,
  RemoveEntryButton,
} from "../../styles/buttons/buttons.styles";

import {
  totalExpensesMonthPath,
  totalExpensesYearPath,
} from "../../strings/strings";

const EditRemoveButtons = ({
  chosenEntryLength,
  entries,
  editPath,
  deletePath,
}) => {
  const location = useLocation();

  return (
    <>
      {chosenEntryLength === 1 && (
        <>
          {entries.map((entry) => (
            <TableEditsButtonDiv key={entry.id}>
              <>
                <Link to={editPath} state={{ entry: entry }}>
                  <EditEntryButton>
                    {entry.date && location.pathname === totalExpensesMonthPath
                      ? `Edit Entry For ${format(
                          new Date(entry.date),
                          "MMMM yyyy"
                        )}`
                      : entry.date &&
                        location.pathname === totalExpensesYearPath
                      ? `Edit Entry For ${format(new Date(entry.date), "yyyy")}`
                      : entry.date
                      ? `Edit Entry For ${format(
                          new Date(entry.date),
                          "dd MMMM yyyy"
                        )}`
                      : `View / Edit ${entry.name.split(" ")[0]}'s Entry`}
                  </EditEntryButton>
                </Link>

                <Link to={deletePath} state={{ entry: entry }}>
                  <RemoveEntryButton>
                    {entry.date && location.pathname === totalExpensesMonthPath
                      ? `Remove Entry For ${format(
                          new Date(entry.date),
                          "MMMM yyyy"
                        )}`
                      : entry.date &&
                        location.pathname === totalExpensesYearPath
                      ? `Remove Entry For ${format(
                          new Date(entry.date),
                          "yyyy"
                        )}`
                      : entry.date
                      ? `Remove Entry For ${format(
                          new Date(entry.date),
                          "dd MMMM yyyy"
                        )}`
                      : `Remove ${entry.name.split(" ")[0]}'s Entry`}
                  </RemoveEntryButton>
                </Link>
              </>
            </TableEditsButtonDiv>
          ))}
        </>
      )}
    </>
  );
};

export default EditRemoveButtons;
