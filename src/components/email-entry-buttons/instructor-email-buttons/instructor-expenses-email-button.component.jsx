import { useLocation } from "react-router-dom";

import { EmailSelfButton } from "../../../styles/buttons/buttons.styles";

import { editExpenseEntryPath } from "../../../strings/strings";

const InstructorExpenseEmailEntryButton = ({ instructorEmail, emailBody }) => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <>
      {path === editExpenseEntryPath && (
        <a
          href={`mailto:${instructorEmail}?subject=Expense%20Invoice&body=${emailBody}`}
        >
          <EmailSelfButton type="button">Email data To Myself</EmailSelfButton>
        </a>
      )}
    </>
  );
};
export default InstructorExpenseEmailEntryButton;
