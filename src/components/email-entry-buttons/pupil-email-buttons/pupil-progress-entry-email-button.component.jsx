import { useLocation } from "react-router-dom";

import { EmailPupilButton } from "../../../styles/buttons/buttons.styles";
import { editPupilProgressEntryPath } from "../../../strings/strings";

const PupilProgressEmailButton = ({ pupilEmail, emailBody }) => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <>
      {pupilEmail && path === editPupilProgressEntryPath && (
        <a
          href={`mailto:${pupilEmail}?subject=Driving%20Lesson%20Latest%20Lesson%20Performance&body=${emailBody}`}
        >
          <EmailPupilButton className="pupil-progress" type="button">
            Email data To Pupil
          </EmailPupilButton>
        </a>
      )}
    </>
  );
};

export default PupilProgressEmailButton;
