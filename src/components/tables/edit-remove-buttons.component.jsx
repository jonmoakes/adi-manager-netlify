import { useDispatch } from "react-redux";
import { useLocation, Link } from "react-router-dom";
import { format } from "date-fns";

import { addEntry } from "../../store/entry/entry.action";
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
  const dispatch = useDispatch();

  return (
    <>
      {chosenEntryLength === 1 && (
        <>
          {entries.map((entry) => (
            <TableEditsButtonDiv key={entry.id}>
              <>
                <Link to={editPath}>
                  <EditEntryButton onClick={() => dispatch(addEntry(entry))}>
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

                <Link to={deletePath}>
                  <RemoveEntryButton onClick={() => dispatch(addEntry(entry))}>
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
