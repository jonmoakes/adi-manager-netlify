import { useEffect } from "react";
import { useDispatch } from "react-redux";

import useFireSwal from "../../../hooks/use-fire-swal";
import useAddEntrySwal from "../../../hooks/add-entry/use-add-entry-swal";

import { addEntry } from "../../../store/entry/entry.action";

import SaveReturnButtons from "../../../components/save-return-buttons/save-return-buttons.component";

import {
  needDateErrorMessage,
  needDescriptionMessage,
  needAmountMessage,
} from "../../../strings/strings";

const AddExpensesSaveReturnButtons = ({ entry }) => {
  const { addEntrySwal } = useAddEntrySwal();
  const { fireSwal } = useFireSwal();

  const { date, description, amount } = entry;
  const dispatch = useDispatch();

  useEffect(() => {
    if (date !== "" && description !== "" && amount !== "") {
      dispatch(addEntry(entry));
    }
  }, [dispatch, entry, date, description, amount]);

  const confirmBox = () => {
    if (date === "") {
      fireSwal("error", needDateErrorMessage, "", 0, true, false);
    } else if (description === "") {
      fireSwal("error", needDescriptionMessage, "", 0, true, false);
    } else if (amount === "") {
      fireSwal("error", needAmountMessage, "", 0, true, false);
    } else {
      addEntrySwal();
    }
  };

  return <SaveReturnButtons {...{ confirmBox }} />;
};

export default AddExpensesSaveReturnButtons;
