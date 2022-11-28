import { BounceInDiv } from "../../../styles/div/div.styles";
import { GreenSpan } from "../../../styles/span/span.styles";

import { addIncomeEntryPath } from "../../../strings/strings";

const AddIncomeEntryInstructions = ({ showInfo, path }) => (
  <>
    {showInfo && path === addIncomeEntryPath && (
      <BounceInDiv>
        <h2>Choosing A Date:</h2>
        <p>
          On A PC / Mac, you can tap on the calendar icon to the right of the
          date field to choose a date, or just start typing in the field. on
          mobile devices, tap on the date input box itself to bring up the date
          picker. select your date and then tap "Ok."
        </p>
        <h2>Adding Your Entry:</h2>
        <p>
          all fields are necessary except the block booking & payment Method
          fields in order to save an entry. Entries will be sorted in the table
          in descending order ( ie latest date first ).
        </p>

        <h2>Block bookings:</h2>
        <p>
          after saving the entry, if you have chosen that the payment was a
          block booking, go to the block booking section ( which you will find
          in the "pupils" section in the header ). there you can then enter in
          the details for a block booking - ie how many hours left the pupil has
          on that block ( which you can then update after each lesson ).
        </p>
        <p>
          these entries will be coloured <GreenSpan>green</GreenSpan> in the
          table. note that this colour will overide the normal table cell
          colours ( which are different for every month to make it easier to see
          at a glance what month entries are in ).
        </p>
        <p>
          so for example an entry in May which normally has a table cell
          background colour of orange, will have the{" "}
          <GreenSpan>green</GreenSpan> colour if it has been set as a block
          booking entry.
        </p>
        <p>
          this is simply a helpful reminder for you to remember to update those
          block booking entries in their own table.
        </p>
        <p>
          if the entry is part of a block booking where you have already
          received the block booking payment, enter 0 and make sure the "is
          block booking" field is set to yes.
        </p>
        <h2>Saving:</h2>
        <p>
          Once you've finished, tap the "save" button and after confirming you
          wish to save, you will returned to the Income Table.
        </p>
      </BounceInDiv>
    )}
  </>
);

export default AddIncomeEntryInstructions;
