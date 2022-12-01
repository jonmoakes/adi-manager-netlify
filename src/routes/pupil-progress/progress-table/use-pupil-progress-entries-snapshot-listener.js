import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../../utils/firebase/firebase.utils";

import { selectCurrentUser } from "../../../store/user/user.selector";
import { updatePupilProgressEntries } from "../../../store/pupil-progress/pupil-progress.action";
import { setErrorMessage } from "../../../store/error/error.action";
import { startLoader, stopLoader } from "../../../store/loader/loader.action";

const usePupilProgressEntriesSnapshotListener = () => {
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
          const { pupilProgressEntries } = doc.data();
          if (doc.exists) {
            dispatch(updatePupilProgressEntries(pupilProgressEntries));
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

export default usePupilProgressEntriesSnapshotListener;
