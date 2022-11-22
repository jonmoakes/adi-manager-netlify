import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

import { firestore } from "../../../../firebase/firebase.utils";

import { selectCurrentUser } from "../../../../redux/user/user.selectors";
import { selectTotalExpensesWeekEntries } from "../../../../redux/total-expenses-week/total-expenses-week.selectors";
import { selectEntry } from "../../../../redux/entry/entry.selectors";

import useEntryAddedSuccessSwal from "../use-entry-added-success-swal";

import { addTotalExpensesWeekEntryPath } from "../../../../resuable-messages/reusable-messages";

const useAddTotalExpensesWeekEntryToFirestore = () => {
  const { entryAddedSuccessSwal } = useEntryAddedSuccessSwal();

  const currentUser = useSelector(selectCurrentUser);
  const totalExpensesWeekEntries = useSelector(selectTotalExpensesWeekEntries);
  const entry = useSelector(selectEntry);

  const location = useLocation();
  const dispatch = useDispatch();

  const addTotalExpensesWeekEntryToFirestore = async () => {
    const userRef = await firestore.doc(`users/${currentUser.id}`);
    try {
      if (location.pathname === addTotalExpensesWeekEntryPath && userRef) {
        await userRef
          .update({
            totalExpensesWeekEntries: [...totalExpensesWeekEntries, entry],
          })
          .then(entryAddedSuccessSwal())
          .then(dispatch({ type: "CLEAR_ENTRY" }));
      }
    } catch (error) {
      dispatch({ type: "SET_ERROR_MESSAGE", payload: error.message });
    }
  };

  return { addTotalExpensesWeekEntryToFirestore };
};

export default useAddTotalExpensesWeekEntryToFirestore;
