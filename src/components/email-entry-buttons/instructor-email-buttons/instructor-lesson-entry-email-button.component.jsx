import { useLocation } from "react-router-dom";

import { EmailSelfButton } from "../../../styles/buttons/buttons.styles";
import { editLessonEntryPath } from "../../../strings/strings";

const InstructorLessonEntryEmailButton = ({ instructorEmail, emailBody }) => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <>
      {path === editLessonEntryPath && (
        <a
          href={`mailto:${instructorEmail}?subject=Driving%20Lesson%20Summary&body=${emailBody}`}
        >
          <EmailSelfButton type="button">Email data To Myself</EmailSelfButton>
        </a>
      )}
    </>
  );
};
export default InstructorLessonEntryEmailButton;
