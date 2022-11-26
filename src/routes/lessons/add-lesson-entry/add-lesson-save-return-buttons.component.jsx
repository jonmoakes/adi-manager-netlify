import { useEffect } from "react";
import { useDispatch } from "react-redux";

import useFireSwal from "../../../hooks/use-fire-swal";
import useAddEntrySwal from "../../../hooks/add-entry/use-add-entry-swal";

import { addEntry } from "../../../store/entry/entry.action";
import SaveReturnButtons from "../../../components/save-return-buttons/save-return-buttons.component";

import {
  needDateErrorMessage,
  needNameMessage,
  needPupilPaidMessage,
} from "../../../strings/strings";

const AddLessonSaveReturnButtons = ({ entry }) => {
  const { addEntrySwal } = useAddEntrySwal();
  const { fireSwal } = useFireSwal();
  const dispatch = useDispatch();
  const { date, name, paid } = entry;

  useEffect(() => {
    if (date !== "" && name !== "" && paid !== "select") {
      dispatch(addEntry(entry));
    }
  }, [dispatch, date, name, paid, entry]);

  const confirmBox = () => {
    if (date === "") {
      fireSwal("error", needDateErrorMessage, "", 0, true, false);
    } else if (name === "") {
      fireSwal("error", needNameMessage, "", 0, true, false);
    } else if (paid === "select") {
      fireSwal("error", needPupilPaidMessage, "", 0, true, false);
    } else {
      addEntrySwal();
    }
  };

  return <SaveReturnButtons {...{ confirmBox }} />;
};

export default AddLessonSaveReturnButtons;
