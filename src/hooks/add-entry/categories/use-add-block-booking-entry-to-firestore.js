import { useSelector, useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../../utils/firebase/firebase.utils";

import useFireSwal from "../../use-fire-swal";

import { clearEntry } from "../../../store/entry/entry.action";
import { setErrorMessage } from "../../../store/error/error.action";
import { selectCurrentUser } from "../../../store/user/user.selector";
import { selectBlockBookingEntries } from "../../../store/block-booking/block-booking.selector";
import { selectEntry } from "../../../store/entry/entry.selector";

import {
  addBlockBookingEntryPath,
  entrySavedMessage,
} from "../../../strings/strings";

const useAddBlockBookingEntryToFirestore = () => {
  const { fireSwal } = useFireSwal();

  const currentUser = useSelector(selectCurrentUser);
  const blockBookingEntries = useSelector(selectBlockBookingEntries);
  const entry = useSelector(selectEntry);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const addBlockBookingEntryToFirestore = async () => {
    const userRef = doc(db, "users", currentUser.id);
    const userSnapshot = await getDoc(userRef);

    try {
      if (location.pathname === addBlockBookingEntryPath && userRef) {
        if (!userSnapshot.exists) return;
        await updateDoc(userRef, {
          blockBookingEntries: [...blockBookingEntries, entry],
        });
        fireSwal("success", entrySavedMessage, "", 1500, false, true);
        navigate(-1);
        dispatch(clearEntry());
      }
    } catch (error) {
      dispatch(setErrorMessage(error.message));
    }
  };

  return { addBlockBookingEntryToFirestore };
};

export default useAddBlockBookingEntryToFirestore;
