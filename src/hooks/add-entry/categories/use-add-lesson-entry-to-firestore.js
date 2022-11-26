import { useSelector, useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../../utils/firebase/firebase.utils";

import useFireSwal from "../../use-fire-swal";

import { clearEntry } from "../../../store/entry/entry.action";
import { setErrorMessage } from "../../../store/error/error.action";
import { selectCurrentUser } from "../../../store/user/user.selector";
import { selectLessonEntries } from "../../../store/lesson/lesson.selector";
import { selectEntry } from "../../../store/entry/entry.selector";

import {
  addLessonEntryPath,
  entrySavedMessage,
} from "../../../strings/strings";

const useAddLessonEntryToFirestore = () => {
  const { fireSwal } = useFireSwal();

  const currentUser = useSelector(selectCurrentUser);
  const lessonEntries = useSelector(selectLessonEntries);
  const entry = useSelector(selectEntry);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const addLessonEntryToFirestore = async () => {
    const userRef = doc(db, "users", currentUser.id);
    const userSnapshot = await getDoc(userRef);

    try {
      if (location.pathname === addLessonEntryPath && userRef) {
        if (!userSnapshot.exists) return;
        await updateDoc(userRef, {
          lessonEntries: [...lessonEntries, entry],
        });
        fireSwal("success", entrySavedMessage, "", 1500, false, true);
        navigate(-1);
        dispatch(clearEntry());
      }
    } catch (error) {
      dispatch(setErrorMessage(error.message));
    }
  };
  return { addLessonEntryToFirestore };
};

export default useAddLessonEntryToFirestore;
