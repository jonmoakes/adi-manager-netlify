import { useLocation } from "react-router-dom";

import useToggleShowInfo from "../../../hooks/use-toggle-show-info.component";
import { BounceInDiv } from "../../../styles/div/div.styles";
import { InfoButton } from "../../../styles/buttons/buttons.styles";
import { RedH2Underline } from "../../../styles/h2/h2.styles";

import { addDiaryEntryPath } from "../../../strings/strings";

const AddDiaryPageEntryInstructions = () => {
  const { toggleShowInfo, showInfo } = useToggleShowInfo();

  const location = useLocation();
  const path = location.pathname;

  return (
    <>
      <div>
        <p>tap to toggle help.</p>
        <InfoButton onClick={toggleShowInfo} />
      </div>

      {showInfo && path === addDiaryEntryPath && (
        <BounceInDiv>
          <RedH2Underline>Choosing A Date:</RedH2Underline>
          <p>
            On A PC / Mac, you can tap on the calendar icon to the right of the
            date field to choose a date, or just start typing in the field. on
            mobile devices, tap on the date input box itself to bring up the
            date picker. select your date and then tap "Ok"
          </p>
          <p>
            you must enter at least the date in order to save an entry. Entries
            will be sorted in the table in descending order ( ie latest date
            first ).
          </p>

          <RedH2Underline>Writing your entry:</RedH2Underline>
          <p>
            write your diary for the day as required in the text box. you have
            infinite space to write whatever you wish.
          </p>
          <RedH2Underline>Saving:</RedH2Underline>
          <p>
            Once you've finished, tap the "save" button in the top right and
            after confirming you wish to save, you will returned to the diary
            table.
          </p>
        </BounceInDiv>
      )}
    </>
  );
};

export default AddDiaryPageEntryInstructions;
