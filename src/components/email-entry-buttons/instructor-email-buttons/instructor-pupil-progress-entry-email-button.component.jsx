import { useLocation } from "react-router-dom";

import { EmailSelfButton } from "../../../styles/buttons/buttons.styles";
import { editPupilProgressEntryPath } from "../../../strings/strings";

const InstructorPupilProgressEntryEmailButton = ({
  instructorEmail,
  emailBody,
}) => {
  const location = useLocation();
  const path = location.pathname;
  return (
    <>
      {path === editPupilProgressEntryPath && (
        <a
          href={`mailto:${instructorEmail}?subject=Driving%20Lesson%20Latest%20Lesson%20Performance&body=${emailBody}`}
        >
          <EmailSelfButton className="instructor-pupil-progress" type="button">
            Email data To Myself
          </EmailSelfButton>
        </a>
      )}
    </>
  );
};
export default InstructorPupilProgressEntryEmailButton;
