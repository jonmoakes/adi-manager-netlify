import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../utils/firebase/firebase.utils";

import { selectCurrentUser } from "../../store/user/user.selector";
import { selectEntry } from "../../store/entry/entry.selector";
import { startLoader, stopLoader } from "../../store/loader/loader.action";
import { setErrorMessage } from "../../store/error/error.action";

const useFindPupilEmail = () => {
  const [pupilEmail, setPupilEmail] = useState("");

  const entry = useSelector(selectEntry);
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const instructorEmail = currentUser.email;

  useEffect(() => {
    if (!currentUser) return;

    const findPupilEmail = async () => {
      const userRef = doc(db, "users", currentUser.id);
      const userSnapshot = await getDoc(userRef);

      try {
        if (!userSnapshot.exists) return;
        dispatch(startLoader());
        const { pupilsEntries } = userSnapshot.data();
        if (entry.name && pupilsEntries) {
          const pupilEmail = pupilsEntries.find(
            (pupil) => pupil.name.toLowerCase() === entry.name.toLowerCase()
          );

          if (!pupilEmail) return;
          setPupilEmail(pupilEmail.emailAddress);
        }
      } catch (error) {
        dispatch(stopLoader());
        dispatch(setErrorMessage(error.message));
      }
    };
    findPupilEmail();
  }, [currentUser, dispatch, entry.name]);

  return { pupilEmail, instructorEmail };
};

export default useFindPupilEmail;
