import { useSelector, useDispatch } from "react-redux";
import firebase from "firebase/compat/app";

import { firestore } from "../../../../firebase/firebase.utils";

import { selectCurrentUser } from "../../../../redux/user/user.selectors";
import { selectEntry } from "../../../../redux/entry/entry.selectors";

import useShowDeleteConfirmedSwal from "../use-show-delete-confirmed-swal";

import { categoryCheck } from "../../../../reusable-functions/reusable-functions";

import { totalExpensesYear } from "../../../../resuable-messages/reusable-messages";

const useDeleteTotalExpensesYearEntry = () => {
  const { showDeleteConfirmedSwal } = useShowDeleteConfirmedSwal();

  const currentUser = useSelector(selectCurrentUser);
  const entry = useSelector(selectEntry);
  const dispatch = useDispatch();
  const category = categoryCheck(entry);

  const deleteTotalExpensesYearEntry = async () => {
    if (!currentUser) return;
    const userRef = await firestore.doc(`users/${currentUser.id}`);
    try {
      if (entry && category === totalExpensesYear) {
        userRef
          .update({
            totalExpensesYearEntries:
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
  return { deleteTotalExpensesYearEntry };
};

export default useDeleteTotalExpensesYearEntry;
