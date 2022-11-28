import { useNavigate } from "react-router-dom";

import useDeleteEntry from "../../hooks/delete-entry/use-delete-entry";

import DeleteEntryInstructions from "./delete-entry-instructions.component";

import { Div } from "../../styles/div/div.styles";
import {
  RemoveEntryButton,
  ReturnToTableButton,
} from "../../styles/buttons/buttons.styles";

const DeleteEntryButtons = () => {
  const { deleteEntry } = useDeleteEntry();
  const navigate = useNavigate();

  const returnToTable = () => {
    navigate(-1);
  };

  return (
    <Div>
      <DeleteEntryInstructions />

      <RemoveEntryButton onClick={deleteEntry}>
        confirm deletion!
      </RemoveEntryButton>

      <p>Or</p>

      <ReturnToTableButton onClick={returnToTable}>
        Return To The Table
      </ReturnToTableButton>
    </Div>
  );
};

export default DeleteEntryButtons;
