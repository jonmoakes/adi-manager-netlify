import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../../utils/firebase/firebase.utils";

import useEntryAddedSuccessSwal from "../use-entry-added-success-swal";

import { clearEntry } from "../../../store/entry/entry.action";
import { setErrorMessage } from "../../../store/error/error.action";
import { selectCurrentUser } from "../../../store/user/user.selector";
import { selectDiaryEntries } from "../../../store/diary/diary.selector";
import { selectEntry } from "../../../store/entry/entry.selector";

import { addDiaryEntryPath } from "../../../strings/strings";

const useAddDiaryEntryToFirestore = () => {
  const { entryAddedSuccessSwal } = useEntryAddedSuccessSwal();

  const currentUser = useSelector(selectCurrentUser);
  const diaryEntries = useSelector(selectDiaryEntries);
  const entry = useSelector(selectEntry);
  const location = useLocation();

  const dispatch = useDispatch();

  const addDiaryEntryToFirestore = async () => {
    const userRef = doc(db, "users", currentUser.id);
    const userSnapshot = await getDoc(userRef);

    try {
      if (location.pathname === addDiaryEntryPath && userRef) {
        if (!userSnapshot.exists) return;
        await updateDoc(userRef, {
          diaryEntries: [...diaryEntries, entry],
        });
        entryAddedSuccessSwal();
        dispatch(clearEntry());
      }
    } catch (error) {
      setErrorMessage(error.message);
    }
  };
  return { addDiaryEntryToFirestore };
};

export default useAddDiaryEntryToFirestore;
