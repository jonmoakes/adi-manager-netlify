import { InstructionsDiv } from "../../styles/div/div.styles";
import { LowercaseA } from "../../styles/a/a.styles";
import { CloseInstructionsButton } from "../../styles/buttons/buttons.styles";

const AndroidInstructions = ({ setShowAndroid }) => (
  <InstructionsDiv>
    <p>
      if you aren't looking at the website on google chrome
      <br />
      launch it and navigate to the app's page:
    </p>
    <p>
      <LowercaseA href="https://www.adi-manager.co.uk">https://www.adi-mananger.co.uk</LowercaseA>
    </p>

    <ul>
      <li>
        tap the overflow button
        <br />
        <span>( the three vertical dots in the top right of the screen )</span>
      </li>
      <li>tap "Add to Home Screen".</li>

      <li>Wait a second for the app's logo to load.</li>
      <li>
        Accept the ADI Manager name for the shortcut
        <br />
        <span>( or enter one you like better ).</span>
      </li>
      <li>tap "Add" to save the new shortcut icon to the home screen</li>
      <p>
        you can then access it as you would access an app downloaded from the
        Google Play store!
      </p>
    </ul>
    <CloseInstructionsButton onClick={() => setShowAndroid(false)}>
      ok, close
    </CloseInstructionsButton>
  </InstructionsDiv>
);

export default AndroidInstructions;
