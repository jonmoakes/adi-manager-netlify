import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

import { firestore } from "../../../../firebase/firebase.utils";

import { selectCurrentUser } from "../../../../redux/user/user.selectors";
import { selectTotalExpensesYearEntries } from "../../../../redux/total-expenses-year/total-expenses-year.selectors";
import { selectEntry } from "../../../../redux/entry/entry.selectors";

import useEntryAddedSuccessSwal from "../use-entry-added-success-swal";

import { addTotalExpensesYearEntryPath } from "../../../../resuable-messages/reusable-messages";

const useAddTotalExpensesYearEntryToFirestore = () => {
  const { entryAddedSuccessSwal } = useEntryAddedSuccessSwal();

  const currentUser = useSelector(selectCurrentUser);
  const totalExpensesYearEntries = useSelector(selectTotalExpensesYearEntries);
  const entry = useSelector(selectEntry);

  const location = useLocation();
  const dispatch = useDispatch();

  const addTotalExpensesYearEntryToFirestore = async () => {
    const userRef = await firestore.doc(`users/${currentUser.id}`);
    try {
      if (location.pathname === addTotalExpensesYearEntryPath && userRef) {
        await userRef
          .update({
            totalExpensesYearEntries: [...totalExpensesYearEntries, entry],
          })
          .then(entryAddedSuccessSwal())
          .then(dispatch({ type: "CLEAR_ENTRY" }));
      }
    } catch (error) {
      dispatch({ type: "SET_ERROR_MESSAGE", payload: error.message });
    }
  };

  return { addTotalExpensesYearEntryToFirestore };
};

export default useAddTotalExpensesYearEntryToFirestore;
