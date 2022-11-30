import { useLocation } from "react-router-dom";

import { EmailSelfButton } from "../../../styles/buttons/buttons.styles";
import { editTotalExpensesYearEntryPath } from "../../../strings/strings";

const InstructorTotalExpensesYearEmailEntryButton = ({
  instructorEmail,
  emailBody,
}) => {
  const location = useLocation();
  const path = location.pathname;
  return (
    <>
      {path === editTotalExpensesYearEntryPath && (
        <a
          href={`mailto:${instructorEmail}?subject=Yearly%20Expenses&body=${emailBody}`}
        >
          <EmailSelfButton type="button">Email data To Myself</EmailSelfButton>
        </a>
      )}
    </>
  );
};
export default InstructorTotalExpensesYearEmailEntryButton;
