import { useLocation } from "react-router-dom";

import { EmailSelfButton } from "../../../styles/buttons/buttons.styles";
import { editTotalExpensesWeekEntryPath } from "../../../strings/strings";

const InstructorTotalExpensesWeekEmailEntryButton = ({
  instructorEmail,
  emailBody,
}) => {
  const location = useLocation();
  const path = location.pathname;
  return (
    <>
      {path === editTotalExpensesWeekEntryPath && (
        <a
          href={`mailto:${instructorEmail}?subject=Total%20Expenses%20Week%20Invoice&body=${emailBody}`}
        >
          <EmailSelfButton type="button">Email data To Myself</EmailSelfButton>
        </a>
      )}
    </>
  );
};
export default InstructorTotalExpensesWeekEmailEntryButton;
