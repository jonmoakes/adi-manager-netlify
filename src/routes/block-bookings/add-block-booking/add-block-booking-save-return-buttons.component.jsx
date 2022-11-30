import { useEffect } from "react";
import { useDispatch } from "react-redux";

import useFireSwal from "../../../hooks/use-fire-swal";
import useAddEntrySwal from "../../../hooks/add-entry/use-add-entry-swal";

import { addEntry } from "../../../store/entry/entry.action";
import SaveReturnButtons from "../../../components/save-return-buttons/save-return-buttons.component";

import {
  needNameMessage,
  needInitialBookingDateMessage,
  needHoursPurchasedMessage,
  needLatestLessonDateMessage,
  needLatestLessonLengthMessage,
  needBalanceHoursRemainingMessage,
} from "../../../strings/strings";

const AddBlockBookingSaveReturnButtons = ({ entry }) => {
  const { addEntrySwal } = useAddEntrySwal();
  const { fireSwal } = useFireSwal();

  const dispatch = useDispatch();

  const {
    name,
    initialBlockBookingDate,
    hoursPurchased,
    latestLessonDate,
    latestLessonLength,
    balanceHoursRemaining,
  } = entry;

  useEffect(() => {
    if (
      name !== "" &&
      initialBlockBookingDate !== "" &&
      hoursPurchased !== "" &&
      latestLessonDate !== "" &&
      latestLessonLength !== "" &&
      balanceHoursRemaining !== ""
    ) {
      dispatch(addEntry(entry));
    }
  }, [
    dispatch,
    entry,
    name,
    balanceHoursRemaining,
    hoursPurchased,
    initialBlockBookingDate,
    latestLessonLength,
    latestLessonDate,
  ]);

  const confirmBox = () => {
    if (name === "") {
      fireSwal("error", needNameMessage, "", 0, true, false);
    } else if (initialBlockBookingDate === "") {
      fireSwal("error", needInitialBookingDateMessage, "", 0, true, false);
    } else if (hoursPurchased === "") {
      fireSwal("error", needHoursPurchasedMessage, "", 0, true, false);
    } else if (latestLessonDate === "") {
      fireSwal("error", needLatestLessonDateMessage, "", 0, true, false);
    } else if (latestLessonLength === "") {
      fireSwal("error", needLatestLessonLengthMessage, "", 0, true, false);
    } else if (balanceHoursRemaining === "") {
      fireSwal("error", needBalanceHoursRemainingMessage, "", 0, true, false);
    } else {
      addEntrySwal();
    }
  };

  return <SaveReturnButtons {...{ confirmBox }} />;
};

export default AddBlockBookingSaveReturnButtons;
