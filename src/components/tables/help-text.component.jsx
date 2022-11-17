import { useState } from "react";

import { InfoButton } from "../../styles/buttons/buttons.styles";
import { BounceInDiv } from "../../styles/div/div.styles";
import { HighlightText, GreenSpan } from "../../styles/span/span.styles";
import { RedH2Underline } from "../../styles/h2/h2.styles";

const HelpText = () => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <>
      <p>Tap to toggle help.</p>
      <InfoButton onClick={() => setShowInfo(!showInfo)} />

      {showInfo && (
        <BounceInDiv>
          <RedH2Underline>Adding Entries:</RedH2Underline>
          <p>
            Tap The Plus Icon In the top right of the screen to add an entry.
          </p>
          <p>
            fill in any data you require ( some fields are mandatory - denoted
            by the red star next to them ) and then tap the "Save" Button in the
            top right of the screen.
          </p>
          <p>
            Entries will be automatically added in date order, earliest date
            first. you can also sort the entries ( see the sorting section below
            ).
          </p>

          <RedH2Underline>sorting entries:</RedH2Underline>
          <p>
            tap on any table header ( ie the green boxes at the top of the table
            - or grey boxes on the lessons table ) to sort the table. Tapping on
            the headers will filter through ascending, descending and unsorted
            versions of the table ( ie the entries will be displayed in the
            order that you entered them ).
          </p>

          <RedH2Underline>Viewing / Editing Entries</RedH2Underline>
          <p>
            if you wish to view the full entry or make edits to an entry, tap on
            the checkbox next to the entry you want to edit and then tap the
            "view / edit entry button." this will take you to a form where you
            can view the full entry and also make edits to it. if you've made an
            edit, tap the "save" button when you're finished editing, or tap the
            "back" button to return without editing any data.
          </p>

          <RedH2Underline>deleting entries:</RedH2Underline>
          <p>
            if you'd like to delete an entry, tap the checkbox next to the entry
            you want to delete. two buttons will then appear at the top of the
            table. Press the red "remove entry" button and after confirming that
            you wish to delete the entry, it will be deleted and the page will
            reload.
          </p>

          <RedH2Underline>Searching Entries:</RedH2Underline>
          <p>
            You can search for a date ( "February", or "06" for example ), a
            pupil's name, or any word from an entry like "fuel" or "44" if you
            wanted to search for a receipt that you know cost £44 for example (
            you don't need to enter the "£" ).
          </p>
          <p>
            please note that you can only search for things that are from the
            rows visible in the table. for example on the lessons table, you can
            only search for the date, pupil name and anything within the lesson
            summary as these are the listed sections of the table. this is
            because on small devices, there are too many rows to fit everything
            in so a select few headers were chosen. you can of course view the
            full entry and see all of the data ( see viewing / editing entries
            above ).
          </p>
          <p>
            searching will return just the entries that contain your search term
            in the table. nothing will be returned if no match is found. delete
            the search text ( or press the small cross on the far right of the
            search field on compatible browsers ) to show the full table again.
            this will reload the table.
          </p>

          <RedH2Underline>Table Row Colours:</RedH2Underline>
          <p>
            on the income & expenses tables, table rows are coloured differently
            depending on the month you choose on the date. this is simply to
            make it a bit more obvious which entries occur in which month when
            glancing at the table.
          </p>

          <RedH2Underline>Lessons Table row Colours:</RedH2Underline>
          <p>
            the table row background color is green if you have selected that
            the pupil
            <GreenSpan> has paid</GreenSpan> for the lesson. It is coloured Red
            if you have selected that they have{" "}
            <HighlightText>Not paid</HighlightText> for the lesson. this makes
            it easy to see at a glance who has or has not paid you.
          </p>

          <RedH2Underline>Income Table row Colours:</RedH2Underline>
          <p>
            as well as the different background colours depending on the month,
            any entry that is marked as a block booking entry is coloured{" "}
            <GreenSpan>green</GreenSpan>. if you are storing block booking data,
            you can then easily see which entries you need to update.
          </p>

          <RedH2Underline>Calling / Texting Pupils:</RedH2Underline>
          <p>
            in the pupils section, you can also call and text them from within
            the app. view their entry as described above and then click on the
            relevant buttons in their entry at the top of the page. If you have
            not provided a phone number or email address, the respective option
            will not be available. clicking the button launches your devices
            phone / messaging / email app. therefore, you don't even have to
            save your pupils details in your devices native contact app as they
            can be safely stored and accessed from here!
          </p>

          <RedH2Underline>Block Bookings:</RedH2Underline>
          <p>
            if you pupil has paid in a block, once you have completed a lesson
            that uses up the block hours, head to the block booking page in the
            pupils section and find the pupils name. edit the entry (see
            "viewing / editing entries" above ), updating the latest lesson
            date, latest lesson length and balance hours remaining fields and
            save. then in the block bookings table, you will be able to easily
            see who has what hours left on their block booking. once it reaches
            zero, you can either leave the entry there in case they pay in
            another block or delete the entry from the table.
          </p>

          <RedH2Underline>table pages:</RedH2Underline>
          <p>
            over time, you may end up with many entries. to improve loading
            performance, only a certain amount of entries are loaded initially (
            the default is 25 rows ). you can change the amount of rows per page
            by clicking the button at the bottom of the table that says "show 25
            rows." this will give you options to show either 10, 25 or 50 rows
            depending on your preference.
          </p>

          <p>
            once the number of entries on the page exceeds the amount of rows,
            they are carried over to the next page. press the buttons at the
            bottom of the table to go forward and backwards between the pages.
            you can also skip directly to the end or start of the entries, or
            even jump to a specific page - simply enter the page number you'd
            like to jump to in the box!
          </p>

          <p>
            note that the buttons will be faded out and disabled if they are not
            applicable ( ie if you try to go to the last page when you're
            already on it etc ).
          </p>

          <p>
            of course, you could always directly search for an entry using the
            search box too! :)
          </p>
        </BounceInDiv>
      )}
    </>
  );
};

export default HelpText;
