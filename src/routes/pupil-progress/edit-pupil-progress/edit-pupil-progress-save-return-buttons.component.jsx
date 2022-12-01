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
import { needNameMessage } from "../../../strings/strings";

const EditPupilProgressSaveReturnButtons = ({ updatedEntry }) => {
  const { updateEntriesSwal } = useUpdateEntriesSwal();
  const { fireSwal } = useFireSwal();

  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  const updatePupilProgressEntry = async () => {
    if (!currentUser) return;
    const userRef = doc(db, "users", currentUser.id);
    const userSnapshot = await getDoc(userRef);
    const batch = writeBatch(db);

    try {
      if (!userSnapshot.exists) return;
      const data = userSnapshot.data();
      const { pupilProgressEntries } = data;

      const entryToRemove = pupilProgressEntries.find(
        (firestoreEntry) => firestoreEntry.id === updatedEntry.id
      );

      batch.update(userRef, { pupilProgressEntries: arrayUnion(updatedEntry) });
      batch.update(userRef, {
        pupilProgressEntries: arrayRemove(entryToRemove),
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
    } else {
      updatePupilProgressEntry();
    }
  };

  return <SaveReturnButtons {...{ confirmBox }} />;
};

export default EditPupilProgressSaveReturnButtons;
