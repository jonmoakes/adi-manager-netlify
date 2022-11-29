import { useEffect } from "react";
import { useDispatch } from "react-redux";

import useFireSwal from "../../../hooks/use-fire-swal";
import useAddEntrySwal from "../../../hooks/add-entry/use-add-entry-swal";

import { addEntry } from "../../../store/entry/entry.action";
import SaveReturnButtons from "../../../components/save-return-buttons/save-return-buttons.component";

import {
  needDateErrorMessage,
  needAmountMessage,
} from "../../../strings/strings";

const AddTotalExpensesWeekSaveReturnButtons = ({ entry }) => {
  const { addEntrySwal } = useAddEntrySwal();
  const { fireSwal } = useFireSwal();

  const { date, weeklyAmount } = entry;
  const dispatch = useDispatch();

  useEffect(() => {
    if (date !== "" && weeklyAmount !== "") {
      dispatch(addEntry(entry));
    }
  }, [dispatch, entry, date, weeklyAmount]);

  const confirmBox = () => {
    if (date === "") {
      fireSwal("error", needDateErrorMessage, "", 0, true, false);
    } else if (weeklyAmount === "") {
      fireSwal("error", needAmountMessage, "", 0, true, false);
    } else {
      addEntrySwal();
    }
  };

  return <SaveReturnButtons {...{ confirmBox }} />;
};

export default AddTotalExpensesWeekSaveReturnButtons;
