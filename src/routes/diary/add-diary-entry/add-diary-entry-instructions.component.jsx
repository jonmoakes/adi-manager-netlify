import { BounceInDiv } from "../../../styles/div/div.styles";

import { addDiaryEntryPath } from "../../../strings/strings";

const AddDiaryPageEntryInstructions = ({ showInfo, path }) => (
  <>
    {showInfo && path === addDiaryEntryPath && (
      <BounceInDiv>
        <h2>Choosing A Date:</h2>
        <p>
          On A PC / Mac, you can tap on the calendar icon to the right of the
          date field to choose a date, or just start typing in the field. on
          mobile devices, tap on the date input box itself to bring up the date
          picker. select your date and then tap "Ok"
        </p>
        <p>
          you must enter at least the date in order to save an entry. Entries
          will be sorted in the table in descending order ( ie latest date first
          ).
        </p>
        <p>
          the save button will appear in the top right when all mandatroy fileds
          have been entered.
        </p>
        <h2>Writing your entry:</h2>
        <p>
          write your diary for the day as required in the text box. you have
          infinite space to write whatever you wish.
        </p>
        <h2>Saving:</h2>
        <p>
          Once you've finished, tap the "save" button in the top right and after
          confirming you wish to save, you will returned to the diary table.
        </p>
      </BounceInDiv>
    )}
  </>
);

export default AddDiaryPageEntryInstructions;
