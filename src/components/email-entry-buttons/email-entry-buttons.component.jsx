import useFindPupilEmail from "./use-find-pupil-email";

import NoEmailFound from "./no-email-found.component";
import LessonEntryEmailButton from "./pupil-email-buttons/lesson-entry-email-button.component";
import InstructorLessonEntryEmailButton from "./instructor-email-buttons/instructor-lesson-entry-email-button.component";
import IncomeEntryEmailButton from "./pupil-email-buttons/income-entry-email-button.component";
import InstructorIncomeEmailEntryButton from "./instructor-email-buttons/instructor-income-email-button.component";
import InstructorExpenseEmailEntryButton from "./instructor-email-buttons/instructor-expenses-email-button.component";
import InstructorTotalExpensesWeekEmailEntryButton from "./instructor-email-buttons/instructor-total-expenses-week-email-button.component";
import InstructorTotalExpensesMonthEmailEntryButton from "./instructor-email-buttons/instructor-total-expenses-month-email-button.component";
import InstructorTotalExpensesYearEmailEntryButton from "./instructor-email-buttons/instructor-total-expenses-year-email-button.component";
import BlockBookingEntryEmailButton from "./pupil-email-buttons/block-booking-email-button.component";
import InstructorBlockBookingEntryEmailButton from "./instructor-email-buttons/instructor-block-booking-entry-email-button.component";
import PupilProgressEntryEmailButton from "./pupil-email-buttons/pupil-progress-entry-email-button.component";
import InstructorPupilProgressEntryEmailButton from "./instructor-email-buttons/instructor-pupil-progress-entry-email-button.component";

const EmailEntryButtons = ({ emailBody }) => {
  const { pupilEmail, instructorEmail } = useFindPupilEmail();

  return (
    <>
      <p>
        please remeber to save any updated info before tapping the email
        button(s) to ensure you send the latest data.
      </p>
      <NoEmailFound {...{ pupilEmail }} />

      <LessonEntryEmailButton {...{ pupilEmail, emailBody }} />
      <InstructorLessonEntryEmailButton {...{ instructorEmail, emailBody }} />

      <IncomeEntryEmailButton {...{ pupilEmail, emailBody }} />
      <InstructorIncomeEmailEntryButton {...{ instructorEmail, emailBody }} />

      <InstructorExpenseEmailEntryButton {...{ instructorEmail, emailBody }} />

      <InstructorTotalExpensesWeekEmailEntryButton
        {...{ instructorEmail, emailBody }}
      />

      <InstructorTotalExpensesMonthEmailEntryButton
        {...{ instructorEmail, emailBody }}
      />
      <InstructorTotalExpensesYearEmailEntryButton
        {...{ instructorEmail, emailBody }}
      />

      <BlockBookingEntryEmailButton {...{ pupilEmail, emailBody }} />
      <InstructorBlockBookingEntryEmailButton
        {...{ instructorEmail, emailBody }}
      />

      <PupilProgressEntryEmailButton {...{ pupilEmail, emailBody }} />
      <InstructorPupilProgressEntryEmailButton
        {...{ instructorEmail, emailBody }}
      />
    </>
  );
};

export default EmailEntryButtons;
