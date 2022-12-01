import { useLocation } from "react-router-dom";

import useToggleShowInfo from "../../../hooks/use-toggle-show-info.component";
import { BounceInDiv } from "../../../styles/div/div.styles";
import { InfoButton } from "../../../styles/buttons/buttons.styles";
import { RedH2Underline } from "../../../styles/h2/h2.styles";

import { addPupilProgressEntryPath } from "../../../strings/strings";

const AddPupilProgressInstructions = () => {
  const { toggleShowInfo, showInfo } = useToggleShowInfo();

  const location = useLocation();
  const path = location.pathname;

  return (
    <>
      <div>
        <p>tap to toggle help.</p>
        <InfoButton onClick={toggleShowInfo} />
      </div>

      {showInfo && path === addPupilProgressEntryPath && (
        <BounceInDiv>
          <p>
            here, you can keep a detailed record of your pupil's progress in the
            various subjects.
          </p>
          <p>
            lets say you've working on moving off and stopping in your lesson.
            tap the "show moving off and stopping" button and then use the
            slider to grade their ability 1 - 5.
          </p>
          <p>
            write in any notes that will remind you of their progress in that
            subject. you have infinite space in the text box, so you can either
            keep adding to your notes or delete what you've written and write
            updated notes, depending on your preference.
          </p>
          <p>
            you can write in as many notes in as many subjects as you'd like.
            don't forget to save after entering all required data!
          </p>
          <p>
            once you've created an entry for your pupil, tap on their entry in
            the table and then tap the edit entry button to view or edit any
            data in the entry.
          </p>
          <p>
            update any subject you wish and then tap the "save" button in the
            top right.
          </p>
          <RedH2Underline>latest lesson performance summary</RedH2Underline>
          <p>
            instead of filling in individual subjects data, you could also just
            summarise a lesson by filling in the "latest lesson performance"
            section. this data is also available to be emailed to yourself and /
            or your pupil should you wish to do so for reference / backup
            purposes. it is totally up to you depending on how much detail you'd
            like to save. :)
          </p>
          <p>
            you can access the emailing feature by tapping on the desired entry
            in the table, then tapping on the "show latest lesson performance"
            button, then tapping the "email data to pupil / myself" button.
          </p>
          <hr />
        </BounceInDiv>
      )}
    </>
  );
};

export default AddPupilProgressInstructions;
