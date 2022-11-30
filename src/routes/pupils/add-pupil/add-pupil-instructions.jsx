import { useLocation } from "react-router-dom";

import useToggleShowInfo from "../../../hooks/use-toggle-show-info.component";
import { BounceInDiv } from "../../../styles/div/div.styles";
import { InfoButton } from "../../../styles/buttons/buttons.styles";
import { RedH2Underline } from "../../../styles/h2/h2.styles";

import { addPupilEntryPath } from "../../../strings/strings";

const AddPupilInstructions = () => {
  const { toggleShowInfo, showInfo } = useToggleShowInfo();

  const location = useLocation();
  const path = location.pathname;

  return (
    <>
      <div>
        <p>tap to toggle help.</p>
        <InfoButton onClick={toggleShowInfo} />
      </div>

      {showInfo && path === addPupilEntryPath && (
        <BounceInDiv>
          <RedH2Underline>adding a pupil entry:</RedH2Underline>
          <p>only the pupil name is required intially.</p>
          <p>you can then whatever data you require after this.</p>
          <p></p>
          <RedH2Underline>phone numbers & email:</RedH2Underline>
          <p>
            if you add a pupil's phone number or email address, after saving the
            entry, when you come to edit / view the entry you will see that the
            call and text buttons and email buttons have appeared at the top of
            their entry.
          </p>
          <p>
            simply tap on any of the buttons to launch your device's native
            phone / text / email app.
          </p>
          <p>
            this saves you having to enter their details into your device's
            contacts app should you wish to keep your business and personal
            contacts separate.
          </p>
          <p>
            if you don't have the native device app installed ( the device's
            native email app on an iPhone for example because you use the gmail
            app ), the device will prompt you to download it as the app can only
            launch the native apps for emailing and calling / texting.
          </p>
          <RedH2Underline>more options after theory test pass:</RedH2Underline>
          <p>
            initially the field that asks if the pupil has passed their theory
            test is set to no.
          </p>
          <p>
            once the pupil passes, change the answer to "yes" and several more
            options will appear, allowing you to save their theory test pass
            certificate number, and details of their driving test.
          </p>
          <p>
            you can then use the driving test result box to input details of
            their test. it has infinte space should you need it depending on how
            much detail you want to input ( or how many test they take! ).
          </p>
          <RedH2Underline>data protection:</RedH2Underline>
          <p>
            remember to delete a pupil once they have passed or stopped having
            lessons with you. this is to protect you from holding a persons
            details for longer than necessary.
          </p>
        </BounceInDiv>
      )}
    </>
  );
};

export default AddPupilInstructions;
