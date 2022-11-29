import { useLocation } from "react-router-dom";

import { EmailPupilButton } from "../../../styles/buttons/buttons.styles";
import { editLessonEntryPath } from "../../../strings/strings";

const LessonEntryEmailButton = ({ pupilEmail, emailBody }) => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <>
      {pupilEmail && path === editLessonEntryPath && (
        <a
          href={`mailto:${pupilEmail}?subject=Driving%20Lesson%20Summary&body=${emailBody}`}
        >
          <EmailPupilButton type="button">Email data To Pupil</EmailPupilButton>
        </a>
      )}
    </>
  );
};
export default LessonEntryEmailButton;
