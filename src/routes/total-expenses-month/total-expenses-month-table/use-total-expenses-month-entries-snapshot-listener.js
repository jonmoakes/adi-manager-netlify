import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../../utils/firebase/firebase.utils";

import { selectCurrentUser } from "../../../store/user/user.selector";
import { updateTotalExpensesMonthEntries } from "../../../store/total-expenses-month/total-expenses-month.action";
import { setErrorMessage } from "../../../store/error/error.action";
import { startLoader, stopLoader } from "../../../store/loader/loader.action";

const useTotalExpensesMonthEntriesSnapshotListener = () => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentUser) return;
    let unsubscribeFromSnapshot = null;

    try {
      dispatch(startLoader());
      unsubscribeFromSnapshot = onSnapshot(
        doc(db, "users", currentUser.id),
        (doc) => {
          const { totalExpensesMonthEntries } = doc.data();
          if (doc.exists) {
            dispatch(
              updateTotalExpensesMonthEntries(totalExpensesMonthEntries)
            );
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
  }, [currentUser, dispatch]);
};

export default useTotalExpensesMonthEntriesSnapshotListener;
