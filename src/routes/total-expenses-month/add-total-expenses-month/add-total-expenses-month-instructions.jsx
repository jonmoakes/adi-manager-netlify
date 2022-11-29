import { useLocation } from "react-router-dom";

import useToggleShowInfo from "../../../hooks/use-toggle-show-info.component";

import { BounceInDiv } from "../../../styles/div/div.styles";
import { InfoButton } from "../../../styles/buttons/buttons.styles";
import { RedH2Underline } from "../../../styles/h2/h2.styles";

import { addTotalExpensesMonthEntryPath } from "../../../strings/strings";

const AddTotalExpensesMonthInstructions = () => {
  const { toggleShowInfo, showInfo } = useToggleShowInfo();

  const location = useLocation();
  const path = location.pathname;

  return (
    <>
      <div>
        <p>tap to toggle help.</p>
        <InfoButton onClick={toggleShowInfo} />
      </div>

      {showInfo && path === addTotalExpensesMonthEntryPath && (
        <BounceInDiv>
          <RedH2Underline>Choosing A Date:</RedH2Underline>
          <p>
            On A PC / Mac, you can tap on the calendar icon to the right of the
            date field to choose a date, or just start typing in the field. on
            mobile devices, tap on the date input box itself to bring up the
            date picker. select your date and then tap "Ok".
          </p>
          <p>
            please note: some browser date pickers don't allow just a month
            option currently ( firefox mainly ), so just choose or type in any
            date within the month and year you wish to enter ( ie 01-01-2022 for
            january 2022 ). The App will then automatically format the date to
            show just the month and year in the table.
          </p>
          <RedH2Underline>Adding Your Entry:</RedH2Underline>
          <p>
            both fields are necessary in order to add an entry. Entries will be
            sorted in the table in descending order ( ie latest date first ).
          </p>

          <p>
            Once you've finished, tap the "save" button and after confirming you
            wish to save, you will returned to the Total Expenses Month Table.
          </p>
        </BounceInDiv>
      )}
    </>
  );
};

export default AddTotalExpensesMonthInstructions;
