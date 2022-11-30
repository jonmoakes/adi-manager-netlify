import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { doc, getDoc, updateDoc, arrayRemove } from "firebase/firestore";
import { db } from "../../../utils/firebase/firebase.utils";

import useFireSwal from "../../use-fire-swal";

import { selectCurrentUser } from "../../../store/user/user.selector";
import { selectEntry } from "../../../store/entry/entry.selector";
import { clearEntry } from "../../../store/entry/entry.action";
import { setErrorMessage } from "../../../store/error/error.action";

import useCategoryCheck from "../../use-category-check";

import {
  totalExpensesYear,
  deleteConfirmedMessage,
} from "../../../strings/strings";

const useDeleteTotalExpensesYearEntry = () => {
  const { category } = useCategoryCheck();
  const { fireSwal } = useFireSwal();

  const currentUser = useSelector(selectCurrentUser);
  const entry = useSelector(selectEntry);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const deleteTotalExpensesYearEntry = async () => {
    if (!currentUser) return;
    const userRef = doc(db, "users", currentUser.id);
    const userSnapshot = await getDoc(userRef);

    try {
      if (!userSnapshot.exists || !entry || category !== totalExpensesYear)
        return;
      const data = userSnapshot.data();
      const { totalExpensesYearEntries } = data;
      const entryToRemove = totalExpensesYearEntries.find(
        (firestoreEntry) => firestoreEntry.id === entry.id
      );

      await updateDoc(userRef, {
        totalExpensesYearEntries: arrayRemove(entryToRemove),
      });
      fireSwal("success", deleteConfirmedMessage, "", 1500, false, true);
      navigate(-1);
      dispatch(clearEntry());
    } catch (error) {
      setErrorMessage(error.message);
    }
  };
  return { deleteTotalExpensesYearEntry };
};

export default useDeleteTotalExpensesYearEntry;
