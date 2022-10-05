import { InstructionsDiv } from "../../styles/div/div.styles";
import { LowercaseA } from "../../styles/a/a.styles";
import { CloseInstructionsButton } from "../../styles/buttons/buttons.styles";
import { Li } from "../../styles/li/li.styles";

const IosInstructions = ({ setShowIos }) => (
  <InstructionsDiv>
    <p>
      if you aren't looking at the website on Safari
      <br />
      launch it and navigate to the app's page:
    </p>
    <p>
      <LowercaseA href="https://www.adi-manager.co.uk">https://www.adi-manager.co.uk</LowercaseA>
    </p>

    <ul>
      <Li>
        Tap the Bookmark icon at the bottom of the screen ( iPhones ) or top
        right of the screen ( iPads )
        <br />
        <span>( it resembles a box with an upward-pointing arrow ).</span>
      </Li>
      <Li>tap "Add to Home Screen".</Li>

      <Li>Wait a second for the app's logo to load.</Li>
      <Li>
        Accept the ADI Manager name for the shortcut
        <br />
        <span>( or enter one you like better ).</span>
      </Li>
      <Li>tap "Add" to save the new shortcut icon to the home screen</Li>
      <p>
        you can then access it as you would access an app downloaded from the
        apple app store!
      </p>
    </ul>

    <CloseInstructionsButton onClick={() => setShowIos(false)}>
      ok, close
    </CloseInstructionsButton>
  </InstructionsDiv>
);

export default IosInstructions;
