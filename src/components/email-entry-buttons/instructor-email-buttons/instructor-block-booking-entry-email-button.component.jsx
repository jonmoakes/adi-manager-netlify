import { useLocation } from "react-router-dom";

import { EmailSelfButton } from "../../../styles/buttons/buttons.styles";
import { editBlockBookingEntryPath } from "../../../strings/strings";

const InstructorBlockBookingEntryEmailButton = ({
  instructorEmail,
  emailBody,
}) => {
  const location = useLocation();
  const path = location.pathname;
  return (
    <>
      {path === editBlockBookingEntryPath && (
        <a
          href={`mailto:${instructorEmail}?subject=Driving%20Lesson%20Block%20Booking%20Information&body=${emailBody}`}
        >
          <EmailSelfButton type="button">Email data To Myself</EmailSelfButton>
        </a>
      )}
    </>
  );
};
export default InstructorBlockBookingEntryEmailButton;
