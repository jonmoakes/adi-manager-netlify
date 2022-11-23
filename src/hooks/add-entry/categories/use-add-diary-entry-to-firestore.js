import { useSelector, useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../../utils/firebase/firebase.utils";

import useFireSwal from "../../use-fire-swal";

import { clearEntry } from "../../../store/entry/entry.action";
import { setErrorMessage } from "../../../store/error/error.action";
import { selectCurrentUser } from "../../../store/user/user.selector";
import { selectDiaryEntries } from "../../../store/diary/diary.selector";
import { selectEntry } from "../../../store/entry/entry.selector";

import { addDiaryEntryPath, entrySavedMessage } from "../../../strings/strings";

const useAddDiaryEntryToFirestore = () => {
  const { fireSwal } = useFireSwal();

  const currentUser = useSelector(selectCurrentUser);
  const diaryEntries = useSelector(selectDiaryEntries);
  const entry = useSelector(selectEntry);
  const location = useLocation();
  const navigate = useNavigate();
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
        fireSwal("success", entrySavedMessage, "", 1500, false, true);
        navigate(-1);
        dispatch(clearEntry());
      }
    } catch (error) {
      dispatch(setErrorMessage(error.message));
    }
  };
  return { addDiaryEntryToFirestore };
};

export default useAddDiaryEntryToFirestore;
