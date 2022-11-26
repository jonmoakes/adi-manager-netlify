import { EmailSelfButton } from "../../../styles/buttons/buttons.styles";
import { editLessonEntryPath } from "../../../strings/strings";

const InstructorLessonEmailEntryButton = ({
  path,
  instructorEmail,
  emailBody,
}) => (
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
export default InstructorLessonEmailEntryButton;
