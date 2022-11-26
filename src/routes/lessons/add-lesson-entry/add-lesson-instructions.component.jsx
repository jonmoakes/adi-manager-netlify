import { BounceInDiv } from "../../../styles/div/div.styles";

import { addLessonEntryPath } from "../../../strings/strings";

const AddLessonInstructions = ({ showInfo, path }) => (
  <>
    {showInfo && path === addLessonEntryPath && (
      <BounceInDiv>
        <h2>Choosing A Date / Time :</h2>
        <p>
          On A PC / Mac, you can tap on the calendar / clock icon to the right
          of the date field to choose a date, or just start typing in the field.
          on mobile devices, tap on the date / time input box itself to bring up
          the date / time picker. select your date / time and then tap "Ok"
        </p>
        <p>
          you must enter at least the date, pupil name and whether the pupil has
          paid or not in order to save an entry. Entries will be sorted in the
          table in descending order ( ie latest date first ).
        </p>
        <h2>Adding Your Entry:</h2>
        <p>
          enter the details for any additional fields that you require. On the
          "has pupil paid?" field, if you select "yes", then the cell in the
          table will be green. if you tap "no", then the cell in the table will
          be red. this allows you easily see at a glance who hasn't paid you.
        </p>
        <p>
          after you have saved, if the pupil has paid, you can go to the income
          section to store a record of the income received if you wish.{" "}
        </p>
        <h2>block bookings:</h2>
        <p>
          if the lesson was part of a block booking, also enter "yes" in the
          "has pupil paid?" field, as of course, they already have paid by
          giving you the money upfront.
        </p>
        <p>
          don't forget to go to the block bookings section ( which you'll find
          in the "pupils" tab in the header ) and update their entry there after
          completing this entry!
        </p>

        <p>
          note - this is all about giving you the option to store data how you
          want. if you didn't want to store income data for example, then you
          don't need to use the income table at all. :)
        </p>

        <h2>Saving:</h2>
        <p>
          Once you've finished, tap the "save" button in the top right and after
          confirming you wish to save, you will returned to the lessons Table.
        </p>
      </BounceInDiv>
    )}
  </>
);

export default AddLessonInstructions;
