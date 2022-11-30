import { useLocation } from "react-router-dom";

import { EmailSelfButton } from "../../../styles/buttons/buttons.styles";
import { editTotalExpensesMonthEntryPath } from "../../../strings/strings";

const InstructorTotalExpensesMonthEmailEntryButton = ({
  instructorEmail,
  emailBody,
}) => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <>
      {path === editTotalExpensesMonthEntryPath && (
        <a
          href={`mailto:${instructorEmail}?subject=Total%20Expenses%20Month%20Invoice&body=${emailBody}`}
        >
          <EmailSelfButton type="button">Email data To Myself</EmailSelfButton>
        </a>
      )}
    </>
  );
};
export default InstructorTotalExpensesMonthEmailEntryButton;
