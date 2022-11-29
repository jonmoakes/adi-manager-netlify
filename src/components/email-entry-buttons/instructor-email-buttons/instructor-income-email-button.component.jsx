import { useLocation } from "react-router-dom";

import { EmailSelfButton } from "../../../styles/buttons/buttons.styles";
import { editIncomeEntryPath } from "../../../strings/strings";

const InstructorIncomeEmailEntryButton = ({ instructorEmail, emailBody }) => {
  const location = useLocation();
  const path = location.pathname;
  return (
    <>
      {path === editIncomeEntryPath && (
        <a
          href={`mailto:${instructorEmail}?subject=Driving%20Lesson%20Receipt&body=${emailBody}`}
        >
          <EmailSelfButton type="button">Email data To Myself</EmailSelfButton>
        </a>
      )}
    </>
  );
};
export default InstructorIncomeEmailEntryButton;
