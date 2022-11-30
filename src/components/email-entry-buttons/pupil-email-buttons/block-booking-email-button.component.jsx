import { useLocation } from "react-router-dom";

import { EmailPupilButton } from "../../../styles/buttons/buttons.styles";
import { editBlockBookingEntryPath } from "../../../strings/strings";

const BlockBookingEntryEmailButton = ({ pupilEmail, emailBody }) => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <>
      {pupilEmail && path === editBlockBookingEntryPath && (
        <a
          href={`mailto:${pupilEmail}?subject=Driving%20Lesson%20Block%20Booking%20Information&body=${emailBody}`}
        >
          <EmailPupilButton type="button">Email data To Pupil</EmailPupilButton>
        </a>
      )}
    </>
  );
};

export default BlockBookingEntryEmailButton;
