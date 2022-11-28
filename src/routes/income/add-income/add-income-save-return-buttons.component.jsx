import { useEffect } from "react";
import { useDispatch } from "react-redux";

import useFireSwal from "../../../hooks/use-fire-swal";
import useAddEntrySwal from "../../../hooks/add-entry/use-add-entry-swal";

import { addEntry } from "../../../store/entry/entry.action";
import SaveReturnButtons from "../../../components/save-return-buttons/save-return-buttons.component";

import {
  needDateErrorMessage,
  needNameMessage,
  needIncomeAmountMessage,
} from "../../../strings/strings";

const AddIncomeSaveReturnButtons = ({ entry }) => {
  const { addEntrySwal } = useAddEntrySwal();
  const { fireSwal } = useFireSwal();

  const { date, name, incomeReceived } = entry;
  const dispatch = useDispatch();

  useEffect(() => {
    if (date !== "" && name !== "" && incomeReceived !== "") {
      dispatch(addEntry(entry));
    }
  }, [dispatch, entry, date, name, incomeReceived]);

  const confirmBox = () => {
    if (date === "") {
      fireSwal("error", needDateErrorMessage, "", 0, true, false);
    } else if (name === "") {
      fireSwal("error", needNameMessage, "", 0, true, false);
    } else if (incomeReceived === "") {
      fireSwal("error", needIncomeAmountMessage, "", 0, true, false);
    } else {
      addEntrySwal();
    }
  };

  return <SaveReturnButtons {...{ confirmBox }} />;
};

export default AddIncomeSaveReturnButtons;
