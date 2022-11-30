import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../../utils/firebase/firebase.utils";

import { selectCurrentUser } from "../../../store/user/user.selector";
import { updateTotalExpensesYearEntries } from "../../../store/total-expenses-year/total-expenses-year.action";
import { setErrorMessage } from "../../../store/error/error.action";
import { selectEntry } from "../../../store/entry/entry.selector";
import { startLoader, stopLoader } from "../../../store/loader/loader.action";

const useTotalExpensesYearEntriesSnapshotListener = () => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const entry = useSelector(selectEntry);

  useEffect(() => {
    if (!currentUser) return;
    let unsubscribeFromSnapshot = null;

    try {
      dispatch(startLoader());
      unsubscribeFromSnapshot = onSnapshot(
        doc(db, "users", currentUser.id),
        (doc) => {
          const { totalExpensesYearEntries } = doc.data();
          if (doc.exists) {
            dispatch(updateTotalExpensesYearEntries(totalExpensesYearEntries));
          }
          dispatch(stopLoader());
        }
      );
    } catch (error) {
      dispatch(stopLoader());
      dispatch(setErrorMessage(error.message));
    }

    return () => {
      unsubscribeFromSnapshot();
    };
  }, [currentUser, dispatch, entry]);
};

export default useTotalExpensesYearEntriesSnapshotListener;
