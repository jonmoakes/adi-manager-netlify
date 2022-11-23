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
  needDateErrorMessage,
  sameEntriesMessage,
} from "../../../strings/strings";

const EditEntrySaveReturnButtons = ({ entry, updatedEntry }) => {
  const { updateEntriesSwal } = useUpdateEntriesSwal();
  const { fireSwal } = useFireSwal();

  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  const updateDiaryEntry = async () => {
    if (!currentUser) return;
    const userRef = doc(db, "users", currentUser.id);
    const userSnapshot = await getDoc(userRef);
    const batch = writeBatch(db);

    try {
      if (!userSnapshot.exists) return;
      const data = userSnapshot.data();
      const { diaryEntries } = data;

      const entryToRemove = diaryEntries.find(
        (firestoreEntry) => firestoreEntry.id === entry.id
      );

      batch.update(userRef, { diaryEntries: arrayUnion(updatedEntry) });
      batch.update(userRef, { diaryEntries: arrayRemove(entryToRemove) });

      await batch
        .commit()
        .then(updateEntriesSwal())
        .catch((error) => dispatch(setErrorMessage(error.message)));
    } catch (error) {
      dispatch(setErrorMessage(error.message));
    }
  };

  const confirmBox = () => {
    if (updatedEntry.date === "") {
      fireSwal("error", needDateErrorMessage, "", 0, true, false);
    } else if (
      updatedEntry.date === entry.date &&
      updatedEntry.entry === entry.entry
    ) {
      fireSwal("error", sameEntriesMessage, "", 0, true, false);
    } else {
      updateDiaryEntry();
    }
  };

  return <SaveReturnButtons {...{ confirmBox }} />;
};

export default EditEntrySaveReturnButtons;
