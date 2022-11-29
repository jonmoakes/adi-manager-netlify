import { useLocation } from "react-router-dom";

import useToggleShowInfo from "../../hooks/use-toggle-show-info.component";

import { InfoButton } from "../../styles/buttons/buttons.styles";
import { BounceInDiv } from "../../styles/div/div.styles";
import { HighlightText } from "../../styles/span/span.styles";

import {
  editPupilEntryPath,
  editPupilProgressEntryPath,
  editTotalExpensesMonthEntryPath,
  editTotalExpensesYearEntryPath,
  editLessonEntryPath,
  editIncomeEntryPath,
  editExpenseEntryPath,
  editTotalExpensesWeekEntryPath,
  editBlockBookingEntryPath,
} from "../../strings/strings";

const UpdateEntryInfo = ({ primaryPhoneNumber, emailAddress }) => {
  const { toggleShowInfo, showInfo } = useToggleShowInfo();
  const location = useLocation();

  return (
    <>
      <div>
        <p>Tap to toggle help.</p>
        <InfoButton onClick={toggleShowInfo} />
        <hr />
      </div>

      {showInfo && (
        <BounceInDiv>
          <p>
            edit any data you require below and then tap the{" "}
            <HighlightText>Save</HighlightText> button to update your entry.
          </p>

          <p>
            or tap the <HighlightText>back</HighlightText> button to return to
            the table Without editing any data.
          </p>

          {location.pathname === editPupilEntryPath && !primaryPhoneNumber && (
            <p>
              enter a phone number in the "edit phone number" field to enable
              one tap calling / texting.
            </p>
          )}

          {location.pathname === editPupilEntryPath && !emailAddress && (
            <p>
              enter an email address in the "edit email address" field to enable
              one tap emailing.
            </p>
          )}

          {location.pathname === editPupilProgressEntryPath && (
            <>
              <p>
                the colors of the subject buttons are dependent on the pupils
                current grading in that subject.
              </p>
              <p>
                red means that they are grade 1, yellow means they are grade 2-4
                and green means they are grade 5.
              </p>
              <p>
                this way, you can easily see at a glance what subjects a pupil
                needs to work on.
              </p>
            </>
          )}
          <hr />
          {(location.pathname === editTotalExpensesMonthEntryPath ||
            location.pathname === editTotalExpensesYearEntryPath) && (
            <>
              <p>
                on the total expenses month edit page, some date pickers don't
                allow just a month option currently ( firefox mainly ), and on
                the total expenses year edit page, date pickers don't allow just
                a year option currently so just select any date where the month
                or year matches the one you want.
              </p>
              <p>
                you can do this by either typing in the date manually ( ie
                01-02-2022 for February 2022 ) or finding any date with the
                month or year you want in the date picker. The App will then
                automatically format the date to show just the month and / or
                year in the table.
              </p>
            </>
          )}

          {(location.pathname === editLessonEntryPath ||
            location.pathname === editIncomeEntryPath ||
            location.pathname === editExpenseEntryPath ||
            location.pathname === editTotalExpensesWeekEntryPath ||
            location.pathname === editTotalExpensesMonthEntryPath ||
            location.pathname === editTotalExpensesYearEntryPath ||
            location.pathname === editBlockBookingEntryPath ||
            location.pathname === editPupilProgressEntryPath) && (
            <>
              <p>
                you can <HighlightText>Email yourself</HighlightText> the data
                contained within the entry by tapping the "email data to myself"
                button at the bottom of this entry.
              </p>
              {location.pathname === { editPupilEntryPath } && (
                <p>
                  please note that you cannot email yourself the "pupil data"
                  section information to yourself. the reason for this is data
                  protection - having your pupil's details saved more than
                  necessary is potentially troublesome in this day and age. All
                  their data is safely stored here as long as no one has access
                  to your login details. then when a pupil passes or stops
                  lessons, you only need to remember to remove their data from
                  this app.
                </p>
              )}
              {(location.pathname === editLessonEntryPath ||
                location.pathname === editIncomeEntryPath ||
                location.pathname === editBlockBookingEntryPath ||
                location.pathname === editPupilProgressEntryPath) && (
                <>
                  <p>
                    you can also{" "}
                    <span>
                      email the data contained within the entry to your pupil
                    </span>{" "}
                    ( make sure they have an email address in the "pupil info"
                    section to enable this feature. tap the help icon at the
                    bottom of the page for more information ).
                  </p>
                </>
              )}
              {location.pathname === editPupilProgressEntryPath && (
                <p>
                  please note only the latest lesson date, grading and summary
                  is available to email in this section. you will find the email
                  buttons within the "Show Latest Lesson Performance" section.
                </p>
              )}
              <hr />
            </>
          )}
        </BounceInDiv>
      )}
    </>
  );
};

export default UpdateEntryInfo;
