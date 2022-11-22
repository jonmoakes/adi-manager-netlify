import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

import { firestore } from "../../../../firebase/firebase.utils";

import { selectCurrentUser } from "../../../../redux/user/user.selectors";
import { selectPupilProgressEntries } from "../../../../redux/pupil-progress/pupil-progress.selectors";
import { selectEntry } from "../../../../redux/entry/entry.selectors";

import useEntryAddedSuccessSwal from "../use-entry-added-success-swal";

import { addPupilProgressEntryPath } from "../../../../resuable-messages/reusable-messages";

const useAddPupilProgressEntryToFirestore = () => {
  const { entryAddedSuccessSwal } = useEntryAddedSuccessSwal();

  const currentUser = useSelector(selectCurrentUser);
  const pupilProgressEntries = useSelector(selectPupilProgressEntries);
  const entry = useSelector(selectEntry);

  const location = useLocation();
  const dispatch = useDispatch();

  const addPupilProgressEntryToFirestore = async () => {
    const userRef = await firestore.doc(`users/${currentUser.id}`);
    try {
      if (location.pathname === addPupilProgressEntryPath && userRef) {
        await userRef
          .update({
            pupilProgressEntries: [...pupilProgressEntries, entry],
          })
          .then(entryAddedSuccessSwal())
          .then(dispatch({ type: "CLEAR_ENTRY" }));
      }
    } catch (error) {
      dispatch({ type: "SET_ERROR_MESSAGE", payload: error.message });
    }
  };
  return { addPupilProgressEntryToFirestore };
};

export default useAddPupilProgressEntryToFirestore;
