import { useLocation } from "react-router-dom";

import useToggleShowInfo from "../../../hooks/use-toggle-show-info.component";

import { BounceInDiv } from "../../../styles/div/div.styles";
import { InfoButton } from "../../../styles/buttons/buttons.styles";
import { RedH2Underline } from "../../../styles/h2/h2.styles";

import { addBlockBookingEntryPath } from "../../../strings/strings";

const AddBlockBookingInstructions = () => {
  const { toggleShowInfo, showInfo } = useToggleShowInfo();

  const location = useLocation();
  const path = location.pathname;
  return (
    <>
      <div>
        <p>tap to toggle help.</p>
        <InfoButton onClick={toggleShowInfo} />
      </div>

      {showInfo && path === addBlockBookingEntryPath && (
        <BounceInDiv>
          <RedH2Underline>keeping the entry up to date:</RedH2Underline>
          <p>
            after you complete a lesson entry in the lessons tab and you see
            that that lesson was part of a block booking, select the pupil from
            the block bookings table and edit their entry. update the latest
            lesson date, length of the lesson and the balance hours remaining
            AFTER completing the lesson. When it reaches zero, you will know to
            ask the pupil for payment next time.
          </p>
          <RedH2Underline>Choosing Dates:</RedH2Underline>
          <p>
            On A PC / Mac, you can tap on the calendar icon to the right of the
            date field to choose a date, or just start typing in the field. on
            mobile devices, tap on the date input box itself to bring up the
            date picker. select your date and then tap "Ok"
          </p>
          <RedH2Underline>Adding Your Entry:</RedH2Underline>
          <p>
            The Pupil Name, Initial Booking Date And Amount of hours purchased
            fields are required at a minimum. Entries will be sorted in the
            table based on name in alphabetical order.
          </p>

          <RedH2Underline>Saving The Entry.</RedH2Underline>
          <p>
            tapping "ok" will add the block booking entry and then direct you to
            the block booking page. tapping "cancel will simply redirect you to
            the block booking table page without saving any data.
          </p>
        </BounceInDiv>
      )}
    </>
  );
};

export default AddBlockBookingInstructions;
