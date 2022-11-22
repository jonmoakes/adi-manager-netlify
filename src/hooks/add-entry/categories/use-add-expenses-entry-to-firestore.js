import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

import { firestore } from "../../../../firebase/firebase.utils";

import { selectCurrentUser } from "../../../../redux/user/user.selectors";
import { selectExpensesEntries } from "../../../../redux/expenses/expenses.selectors";
import { selectEntry } from "../../../../redux/entry/entry.selectors";

import useEntryAddedSuccessSwal from "../use-entry-added-success-swal";

import { addExpensesEntryPath } from "../../../../resuable-messages/reusable-messages";

const useAddExpensesEntryToFirestore = () => {
  const { entryAddedSuccessSwal } = useEntryAddedSuccessSwal();

  const currentUser = useSelector(selectCurrentUser);
  const expensesEntries = useSelector(selectExpensesEntries);
  const entry = useSelector(selectEntry);

  const location = useLocation();
  const dispatch = useDispatch();

  const addExpensesEntryToFirestore = async () => {
    const userRef = await firestore.doc(`users/${currentUser.id}`);
    try {
      if (location.pathname === addExpensesEntryPath && userRef) {
        await userRef
          .update({
            expensesEntries: [...expensesEntries, entry],
          })
          .then(entryAddedSuccessSwal())
          .then(dispatch({ type: "CLEAR_ENTRY" }));
      }
    } catch (error) {
      dispatch({ type: "SET_ERROR_MESSAGE", payload: error.message });
    }
  };

  return { addExpensesEntryToFirestore };
};

export default useAddExpensesEntryToFirestore;
