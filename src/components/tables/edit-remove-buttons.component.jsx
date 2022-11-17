import { useNavigate, useLocation } from "react-router-dom";
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
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <>
      {chosenEntryLength === 1 && (
        <>
          {entries.map((entry) => (
            <TableEditsButtonDiv key={entry.id}>
              <>
                <EditEntryButton
                  onClick={() =>
                    navigate({
                      pathname: editPath,
                      state: { entry: entry },
                    })
                  }
                >
                  {entry.date && location.pathname === totalExpensesMonthPath
                    ? `Edit Entry For ${format(
                        new Date(entry.date),
                        "MMMM yyyy"
                      )}`
                    : entry.date && location.pathname === totalExpensesYearPath
                    ? `Edit Entry For ${format(new Date(entry.date), "yyyy")}`
                    : entry.date
                    ? `Edit Entry For ${format(
                        new Date(entry.date),
                        "dd MMMM yyyy"
                      )}`
                    : `View / Edit ${entry.name.split(" ")[0]}'s Entry`}
                </EditEntryButton>

                <RemoveEntryButton
                  onClick={() =>
                    navigate({
                      pathname: deletePath,
                      state: { entry: entry },
                    })
                  }
                >
                  {entry.date && location.pathname === totalExpensesMonthPath
                    ? `Remove Entry For ${format(
                        new Date(entry.date),
                        "MMMM yyyy"
                      )}`
                    : entry.date && location.pathname === totalExpensesYearPath
                    ? `Remove Entry For ${format(new Date(entry.date), "yyyy")}`
                    : entry.date
                    ? `Remove Entry For ${format(
                        new Date(entry.date),
                        "dd MMMM yyyy"
                      )}`
                    : `Remove ${entry.name.split(" ")[0]}'s Entry`}
                </RemoveEntryButton>
              </>
            </TableEditsButtonDiv>
          ))}
        </>
      )}
    </>
  );
};

export default EditRemoveButtons;
