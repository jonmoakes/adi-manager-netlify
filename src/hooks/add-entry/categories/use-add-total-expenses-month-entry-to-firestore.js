import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

import { firestore } from "../../../../firebase/firebase.utils";

import { selectCurrentUser } from "../../../../redux/user/user.selectors";
import { selectTotalExpensesMonthEntries } from "../../../../redux/total-expenses-month/total-expenses-month.selectors";
import { selectEntry } from "../../../../redux/entry/entry.selectors";

import useEntryAddedSuccessSwal from "../use-entry-added-success-swal";

import { addTotalExpensesMonthEntryPath } from "../../../../resuable-messages/reusable-messages";

const useAddTotalExpensesMonthEntryToFirestore = () => {
  const { entryAddedSuccessSwal } = useEntryAddedSuccessSwal();

  const currentUser = useSelector(selectCurrentUser);
  const totalExpensesMonthEntries = useSelector(
    selectTotalExpensesMonthEntries
  );
  const entry = useSelector(selectEntry);

  const location = useLocation();
  const dispatch = useDispatch();

  const addTotalExpensesMonthEntryToFirestore = async () => {
    const userRef = await firestore.doc(`users/${currentUser.id}`);
    try {
      if (location.pathname === addTotalExpensesMonthEntryPath && userRef) {
        await userRef
          .update({
            totalExpensesMonthEntries: [...totalExpensesMonthEntries, entry],
          })
          .then(entryAddedSuccessSwal())
          .then(dispatch({ type: "CLEAR_ENTRY" }));
      }
    } catch (error) {
      dispatch({ type: "SET_ERROR_MESSAGE", payload: error.message });
    }
  };

  return { addTotalExpensesMonthEntryToFirestore };
};

export default useAddTotalExpensesMonthEntryToFirestore;
