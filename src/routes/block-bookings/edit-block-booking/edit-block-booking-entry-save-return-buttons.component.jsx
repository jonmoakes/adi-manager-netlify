import { useSelector, useDispatch } from "react-redux";
import {
  doc,
  getDoc,
  arrayRemove,
  arrayUnion,
  writeBatch,
} from "firebase/firestore";
import { db } from "../../../utils/firebase/firebase.utils";

import useFireSwal from "../../../hooks/use-fire-swal";
import useUpdateEntriesSwal from "../../../hooks/update-entry/use-update-entries-swal";

import { selectCurrentUser } from "../../../store/user/user.selector";
import { setErrorMessage } from "../../../store/error/error.action";

import SaveReturnButtons from "../../../components/save-return-buttons/save-return-buttons.component";
import {
  needNameMessage,
  needInitialBookingDateMessage,
  needHoursPurchasedMessage,
  needLatestLessonDateMessage,
  needLatestLessonLengthMessage,
  needBalanceHoursRemainingMessage,
  sameEntriesMessage,
} from "../../../strings/strings";

import { sameEntriesCheck } from "./same-entries-check";

const EditBlockBookingEntrySaveReturnButtons = ({ entry, updatedEntry }) => {
  const { updateEntriesSwal } = useUpdateEntriesSwal();
  const { fireSwal } = useFireSwal();

  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  const updateBlockBookingEntry = async () => {
    if (!currentUser) return;
    const userRef = doc(db, "users", currentUser.id);
    const userSnapshot = await getDoc(userRef);
    const batch = writeBatch(db);

    try {
      if (!userSnapshot.exists) return;
      const data = userSnapshot.data();
      const { blockBookingEntries } = data;

      const entryToRemove = blockBookingEntries.find(
        (firestoreEntry) => firestoreEntry.id === entry.id
      );

      batch.update(userRef, { blockBookingEntries: arrayUnion(updatedEntry) });
      batch.update(userRef, {
        blockBookingEntries: arrayRemove(entryToRemove),
      });

      await batch
        .commit()
        .then(updateEntriesSwal())
        .catch((error) => dispatch(setErrorMessage(error.message)));
    } catch (error) {
      dispatch(setErrorMessage(error.message));
    }
  };

  const confirmBox = () => {
    if (updatedEntry.name === "") {
      fireSwal("error", needNameMessage, "", 0, true, false);
    } else if (updatedEntry.initialBlockBookingDate === "") {
      fireSwal("error", needInitialBookingDateMessage, "", 0, true, false);
    } else if (updatedEntry.hoursPurchased === "") {
      fireSwal("error", needHoursPurchasedMessage, "", 0, true, false);
    } else if (updatedEntry.latestLessonDate === "") {
      fireSwal("error", needLatestLessonDateMessage, "", 0, true, false);
    } else if (updatedEntry.latestLessonLength === "") {
      fireSwal("error", needLatestLessonLengthMessage, "", 0, true, false);
    } else if (updatedEntry.balanceHoursRemaining === "") {
      fireSwal("error", needBalanceHoursRemainingMessage, "", 0, true, false);
    } else if (sameEntriesCheck(entry, updatedEntry)) {
      fireSwal("error", sameEntriesMessage, "", 0, true, false);
    } else {
      updateBlockBookingEntry();
    }
  };

  return <SaveReturnButtons {...{ confirmBox }} />;
};

export default EditBlockBookingEntrySaveReturnButtons;
