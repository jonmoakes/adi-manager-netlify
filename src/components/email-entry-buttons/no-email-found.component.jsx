import { useState } from "react";
import { useLocation } from "react-router-dom";
import { InfoButton } from "../../styles/buttons/buttons.styles";

import { BounceInDiv } from "../../styles/div/div.styles";
import { HighlightText } from "../../styles/span/span.styles";

import {
  editLessonEntryPath,
  editIncomeEntryPath,
  editBlockBookingEntryPath,
  editPupilProgressEntryPath,
} from "../../strings/strings";

const NoEmailFound = ({ pupilEmail }) => {
  const [showNoEmailInfo, setShowNoEmailInfo] = useState(false);
  const location = useLocation();
  const path = location.pathname;

  const toggleInfo = () => {
    setShowNoEmailInfo(!showNoEmailInfo);
  };

  return (
    <>
      {!pupilEmail &&
        (path === editLessonEntryPath ||
          path === editIncomeEntryPath ||
          path === editBlockBookingEntryPath ||
          path === editPupilProgressEntryPath) && (
          <>
            <div>
              <InfoButton onClick={toggleInfo} />
            </div>

            {showNoEmailInfo && (
              <BounceInDiv>
                <h2>emailing entry:</h2>

                <p>
                  tap the "email data to myself" button below to populate an
                  email with the data in this entry.
                </p>
                <p>
                  to email this data to the pupil, they need to have an entry in
                  the <HighlightText>pupil info section</HighlightText> ( which
                  is where their email address will be saved ).
                </p>
                <p>
                  if you are sure you have their entry as described above,
                  please make sure that the pupil's name in the{" "}
                  <HighlightText>Pupil Info Section</HighlightText> is{" "}
                  <HighlightText>EXACTLY</HighlightText> the same as the one you
                  have entered in the <HighlightText>Name field</HighlightText>{" "}
                  in this section. if there is no email saved in the the pupil's
                  info section, the button to email them this data shall not
                  appear.
                </p>
                <p>
                  this even includes if you accidentally have an additional
                  space at the end - ie <HighlightText>"Sam "</HighlightText>{" "}
                  rather than <HighlightText>"Sam"</HighlightText> as many
                  devices automatically add a space in anticipation of another
                  word being used. this particularly happens if you copy and
                  paste the name from the pupil info section.
                </p>
                <p>
                  if the corresponding pupil does not have an email address in
                  their pupil info section, Simply add it and then save. then,
                  the email pupil button will appear here.
                </p>
                <p>
                  or if you know it off by heart, you can simply tap the "email
                  data to myself" button and replace your email with the pupils.
                  :)
                </p>
              </BounceInDiv>
            )}
          </>
        )}
    </>
  );
};

export default NoEmailFound;
