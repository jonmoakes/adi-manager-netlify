import { useEffect } from "react";
import { useDispatch } from "react-redux";

import useFireSwal from "../../../hooks/use-fire-swal";
import useAddEntrySwal from "../../../hooks/add-entry/use-add-entry-swal";

import { addEntry } from "../../../store/entry/entry.action";
import SaveReturnButtons from "../../../components/save-return-buttons/save-return-buttons.component";

import { needDateErrorMessage } from "../../../strings/strings";

const AddDiarySaveReturnButtons = ({ entry }) => {
  const { addEntrySwal } = useAddEntrySwal();
  const { fireSwal } = useFireSwal();
  const dispatch = useDispatch();
  const { date } = entry;

  useEffect(() => {
    if (date !== "") {
      dispatch(addEntry(entry));
    }
  }, [dispatch, entry, date]);

  const confirmBox = () => {
    if (date === "") {
      fireSwal("error", needDateErrorMessage, "", 0, true, false);
    } else {
      addEntrySwal();
    }
  };

  return <SaveReturnButtons {...{ confirmBox }} />;
};

export default AddDiarySaveReturnButtons;
