import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

import { firestore } from "../../../../firebase/firebase.utils";

import { selectCurrentUser } from "../../../../redux/user/user.selectors";
import { selectBlockBookingEntries } from "../../../../redux/block-booking/block-booking.selectors";
import { selectEntry } from "../../../../redux/entry/entry.selectors";

import useEntryAddedSuccessSwal from "../use-entry-added-success-swal";

import { addBlockBookingsEntryPath } from "../../../../resuable-messages/reusable-messages";

const useAddBlockBookingEntryToFirestore = () => {
  const { entryAddedSuccessSwal } = useEntryAddedSuccessSwal();

  const currentUser = useSelector(selectCurrentUser);
  const blockBookingEntries = useSelector(selectBlockBookingEntries);
  const entry = useSelector(selectEntry);

  const location = useLocation();
  const dispatch = useDispatch();

  const addBlockBookingEntryToFirestore = async () => {
    const userRef = await firestore.doc(`users/${currentUser.id}`);

    try {
      if (location.pathname === addBlockBookingsEntryPath && userRef) {
        await userRef
          .update({
            blockBookingEntries: [...blockBookingEntries, entry],
          })
          .then(entryAddedSuccessSwal())
          .then(dispatch({ type: "CLEAR_ENTRY" }));
      }
    } catch (error) {
      dispatch({ type: "SET_ERROR_MESSAGE", payload: error.message });
    }
  };
  return { addBlockBookingEntryToFirestore };
};

export default useAddBlockBookingEntryToFirestore;
