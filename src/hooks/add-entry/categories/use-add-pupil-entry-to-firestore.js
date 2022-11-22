import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

import { firestore } from "../../../../firebase/firebase.utils";

import { selectCurrentUser } from "../../../../redux/user/user.selectors";
import { selectPupilsEntries } from "../../../../redux/pupils/pupils.selectors";
import { selectEntry } from "../../../../redux/entry/entry.selectors";

import useEntryAddedSuccessSwal from "../use-entry-added-success-swal";

import { addPupilEntryPath } from "../../../../resuable-messages/reusable-messages";

const useAddPupilEntryToFirestore = () => {
  const { entryAddedSuccessSwal } = useEntryAddedSuccessSwal();

  const currentUser = useSelector(selectCurrentUser);
  const pupilsEntries = useSelector(selectPupilsEntries);
  const entry = useSelector(selectEntry);

  const location = useLocation();
  const dispatch = useDispatch();

  const addPupilEntryToFirestore = async () => {
    const userRef = await firestore.doc(`users/${currentUser.id}`);
    try {
      if (location.pathname === addPupilEntryPath && userRef) {
        await userRef
          .update({
            pupilsEntries: [...pupilsEntries, entry],
          })
          .then(entryAddedSuccessSwal())
          .then(dispatch({ type: "CLEAR_ENTRY" }));
      }
    } catch (error) {
      dispatch({ type: "SET_ERROR_MESSAGE", payload: error.message });
    }
  };

  return { addPupilEntryToFirestore };
};

export default useAddPupilEntryToFirestore;
