import { useLocation } from "react-router-dom";

import useToggleShowInfo from "../../../hooks/use-toggle-show-info.component";
import { BounceInDiv } from "../../../styles/div/div.styles";
import { InfoButton } from "../../../styles/buttons/buttons.styles";
import { RedH2Underline } from "../../../styles/h2/h2.styles";

import { addLessonEntryPath } from "../../../strings/strings";

const AddLessonInstructions = () => {
  const { toggleShowInfo, showInfo } = useToggleShowInfo();

  const location = useLocation();
  const path = location.pathname;

  return (
    <>
      <div>
        <p>tap to toggle help.</p>
        <InfoButton onClick={toggleShowInfo} />
      </div>

      {showInfo && path === addLessonEntryPath && (
        <BounceInDiv>
          <RedH2Underline>Choosing A Date / Time :</RedH2Underline>
          <p>
            On A PC / Mac, you can tap on the calendar / clock icon to the right
            of the date field to choose a date, or just start typing in the
            field. on mobile devices, tap on the date / time input box itself to
            bring up the date / time picker. select your date / time and then
            tap "Ok"
          </p>
          <p>
            you must enter at least the date, pupil name and whether the pupil
            has paid or not in order to save an entry. Entries will be sorted in
            the table in descending order ( ie latest date first ).
          </p>
          <RedH2Underline>Adding Your Entry:</RedH2Underline>
          <p>
            enter the details for any additional fields that you require. On the
            "has pupil paid?" field, if you select "yes", then the cell in the
            table will be green. if you tap "no", then the cell in the table
            will be red. this allows you easily see at a glance who hasn't paid
            you.
          </p>
          <p>
            after you have saved, if the pupil has paid, you can go to the
            income section to store a record of the income received if you wish.{" "}
          </p>
          <RedH2Underline>block bookings:</RedH2Underline>
          <p>
            if the lesson was part of a block booking, also enter "yes" in the
            "has pupil paid?" field, as of course, they already have paid by
            giving you the money upfront.
          </p>
          <p>
            don't forget to go to the block bookings section ( which you'll find
            in the "pupils" tab in the header ) and update their entry there
            after completing this entry!
          </p>

          <p>
            note - this is all about giving you the option to store data how you
            want. if you didn't want to store income data for example, then you
            don't need to use the income table at all. :)
          </p>

          <RedH2Underline>Saving:</RedH2Underline>
          <p>
            Once you've finished, tap the "save" button in the top right and
            after confirming you wish to save, you will returned to the lessons
            Table.
          </p>
        </BounceInDiv>
      )}
    </>
  );
};

export default AddLessonInstructions;
