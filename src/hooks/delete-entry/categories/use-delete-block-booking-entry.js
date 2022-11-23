import { useSelector, useDispatch } from "react-redux";
import firebase from "firebase/compat/app";

import { firestore } from "../../../../firebase/firebase.utils";

import { selectCurrentUser } from "../../../../redux/user/user.selectors";
import { selectEntry } from "../../../../redux/entry/entry.selectors";

import useShowDeleteConfirmedSwal from "../use-show-delete-confirmed-swal";

import { categoryCheck } from "../../../../reusable-functions/reusable-functions";

import { blockBooking } from "../../../../resuable-messages/reusable-messages";

const useDeleteBlockBookingEntry = () => {
  const { showDeleteConfirmedSwal } = useShowDeleteConfirmedSwal();

  const currentUser = useSelector(selectCurrentUser);
  const entry = useSelector(selectEntry);
  const dispatch = useDispatch();
  const category = categoryCheck(entry);

  const deleteBlockBookingEntry = async () => {
    if (!currentUser) return;
    const userRef = await firestore.doc(`users/${currentUser.id}`);
    try {
      if (entry && category === blockBooking) {
        userRef
          .update({
            blockBookingEntries:
              firebase.firestore.FieldValue.arrayRemove(entry),
          })
          .then(showDeleteConfirmedSwal());
      } else {
        return;
      }
    } catch (error) {
      dispatch({ type: "SET_ERROR_MESSAGE", payload: error.message });
    }
  };
  return { deleteBlockBookingEntry };
};

export default useDeleteBlockBookingEntry;
