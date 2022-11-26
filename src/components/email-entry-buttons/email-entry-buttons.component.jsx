import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../utils/firebase/firebase.utils";

import { selectCurrentUser } from "../../store/user/user.selector";
import { setErrorMessage } from "../../store/error/error.action";
import { startLoader, stopLoader } from "../../store/loader/loader.action";

import LessonEntryEmailButton from "./pupil-email-buttons/lesson-entry-email-button.component";
// import IncomeEntryEmailButton from "./pupil-email-buttons/income-entry-email-button.component";
// import BlockBookingEntryEmailButton from "./pupil-email-buttons/block-booking-email-button.component";
// import PupilProgressEntryEmailButton from "./pupil-email-buttons/pupil-progress-entry-email-button.component";
import InstructorLessonEmailEntryButton from "./instructor-email-buttons/instructor-lesson-entry-email-button.component";
// import InstructorIncomeEmailEntryButton from "./instructor-email-buttons/instructor-income-email-button.component";
// import InstructorExpenseEmailEntryButton from "./instructor-email-buttons/instructor-expenses-email-button.component";
// import InstructorTotalExpensesWeekEmailEntryButton from "./instructor-email-buttons/instructor-total-expenses-week-email-button.component";
// import InstructorTotalExpensesMonthEmailEntryButton from "./instructor-email-buttons/instructor-total-expenses-month-email-button.component";
// import InstructorTotalExpensesYearEmailEntryButton from "./instructor-email-buttons/instructor-total-expenses-year-email-button.component";
// import InstructorBlockBookingEntryEmailButton from "./instructor-email-buttons/instructor-block-booking-entry-email-button.component";
// import InstructorPupilProgressEntryEmailButton from "./instructor-email-buttons/instructor-pupil-progress-entry-email-button.component";
import NoEmailFound from "./no-email-found.component";

const EmailEntryButtons = ({ entry, emailBody }) => {
  const [pupilEmail, setPupilEmail] = useState("");

  const currentUser = useSelector(selectCurrentUser);
  const instructorEmail = currentUser.email;
  const dispatch = useDispatch();
  const location = useLocation();
  const path = location.pathname;

  useEffect(() => {
    if (!currentUser) return;
    let unsubscribeFromSnapshot = null;

    try {
      dispatch(startLoader());
      unsubscribeFromSnapshot = onSnapshot(
        doc(db, "users", currentUser.id),
        (doc) => {
          const { pupilsEntries } = doc.data();
          if (doc.exists) {
            if (entry.name && pupilsEntries) {
              const pupilEmail = pupilsEntries.find(
                (pupil) => pupil.name.toLowerCase() === entry.name.toLowerCase()
              );

              if (!pupilEmail) return;
              setPupilEmail(pupilEmail.emailAddress);
            }
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

  return (
    <>
      <LessonEntryEmailButton {...{ path, pupilEmail, emailBody }} />
      {/* <IncomeEntryEmailButton {...{ path, pupilEmail, emailBody }} />
      <BlockBookingEntryEmailButton {...{ path, pupilEmail, emailBody }} />
      <PupilProgressEntryEmailButton {...{ path, pupilEmail, emailBody }} /> */}
      <NoEmailFound {...{ path, pupilEmail }} />
      <InstructorLessonEmailEntryButton
        {...{ path, instructorEmail, emailBody }}
      />
      {/* <InstructorIncomeEmailEntryButton
        {...{ path, instructorEmail, emailBody }}
      />
      <InstructorExpenseEmailEntryButton
        {...{ path, instructorEmail, emailBody }}
      />
      <InstructorTotalExpensesWeekEmailEntryButton
        {...{ path, instructorEmail, emailBody }}
      />
      <InstructorTotalExpensesMonthEmailEntryButton
        {...{ path, instructorEmail, emailBody }}
      />
      <InstructorTotalExpensesYearEmailEntryButton
        {...{ path, instructorEmail, emailBody }}
      />
      <InstructorBlockBookingEntryEmailButton
        {...{ path, instructorEmail, emailBody }}
      />
      <InstructorPupilProgressEntryEmailButton
        {...{ path, instructorEmail, emailBody }}
      /> */}
    </>
  );
};

export default EmailEntryButtons;
