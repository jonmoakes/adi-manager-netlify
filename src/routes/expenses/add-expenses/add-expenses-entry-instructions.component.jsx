import { useLocation } from "react-router-dom";
import useToggleShowInfo from "../../../hooks/use-toggle-show-info.component";

import { BounceInDiv } from "../../../styles/div/div.styles";
import { InfoButton } from "../../../styles/buttons/buttons.styles";
import { RedH2Underline } from "../../../styles/h2/h2.styles";

import { addExpensesEntryPath } from "../../../strings/strings";

const AddExpensesEntryInstructions = () => {
  const { toggleShowInfo, showInfo } = useToggleShowInfo();

  const location = useLocation();
  const path = location.pathname;

  return (
    <>
      <div>
        <p>tap to toggle help.</p>
        <InfoButton onClick={toggleShowInfo} />
      </div>

      {showInfo && path === addExpensesEntryPath && (
        <BounceInDiv>
          <RedH2Underline>Choosing A Date:</RedH2Underline>
          <p>
            On A PC / Mac, you can tap on the calendar icon to the right of the
            date field to choose a date, or just start typing in the field. on
            mobile devices, tap on the date input box itself to bring up the
            date picker. select your date and then tap "Ok".
          </p>
          <RedH2Underline>Adding Your Entry:</RedH2Underline>
          <p>
            all fields are necessary in order to save an entry. Entries will be
            sorted in the table in descending order ( ie latest date first ).
          </p>
          <RedH2Underline>Saving:</RedH2Underline>
          <p>
            Once you've finished, tap the "save" button and after confirming you
            wish to save, you will returned to the Expenses Table.
          </p>
        </BounceInDiv>
      )}
    </>
  );
};

export default AddExpensesEntryInstructions;
