import { useLocation } from "react-router-dom";

import { EmailPupilButton } from "../../../styles/buttons/buttons.styles";
import { editIncomeEntryPath } from "../../../strings/strings";

const IncomeEntryEmailButton = ({ pupilEmail, emailBody }) => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <>
      {pupilEmail && path === editIncomeEntryPath && (
        <a
          href={`mailto:${pupilEmail}?subject=Driving%20Lesson%20Receipt&body=${emailBody}`}
        >
          <EmailPupilButton type="button">Email data To Pupil</EmailPupilButton>
        </a>
      )}
    </>
  );
};

export default IncomeEntryEmailButton;
