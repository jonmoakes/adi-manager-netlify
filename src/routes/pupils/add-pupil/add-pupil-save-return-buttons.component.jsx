import { useEffect } from "react";
import { useDispatch } from "react-redux";

import useFireSwal from "../../../hooks/use-fire-swal";
import useAddEntrySwal from "../../../hooks/add-entry/use-add-entry-swal";

import { addEntry } from "../../../store/entry/entry.action";
import SaveReturnButtons from "../../../components/save-return-buttons/save-return-buttons.component";

import { needNameMessage, phoneNumberError } from "../../../strings/strings";

const AddPupilSaveReturnButtons = ({ entry }) => {
  const { addEntrySwal } = useAddEntrySwal();
  const { fireSwal } = useFireSwal();
  const dispatch = useDispatch();
  const { name, primaryPhoneNumber } = entry;

  useEffect(() => {
    if (name !== "") {
      dispatch(addEntry(entry));
    }
  }, [dispatch, name, entry]);

  const confirmBox = () => {
    if (name === "") {
      fireSwal("error", needNameMessage, "", 0, true, false);
    } else if (
      primaryPhoneNumber.length > 0 &&
      primaryPhoneNumber.length !== 11
    ) {
      fireSwal("error", phoneNumberError, "", 0, true, false);
    } else {
      addEntrySwal();
    }
  };

  return <SaveReturnButtons {...{ confirmBox }} />;
};

export default AddPupilSaveReturnButtons;
