import { InstructionsDiv } from "../../styles/div/div.styles";
import { LowercaseA } from "../../styles/a/a.styles";
import { CloseInstructionsButton } from "../../styles/buttons/buttons.styles";
import { PwaLi, PwaUl } from "../../styles/li/li.styles";

const IosInstructions = ({ setShowIos }) => (
  <InstructionsDiv>
    <p>
      if you aren't looking at the website on Safari
      <br />
      launch it and navigate to the app's page:
    </p>
    <p>
      <LowercaseA className="instructions" href="https://www.adi-manager.co.uk">
        https://www.adi-manager.co.uk
      </LowercaseA>
    </p>

    <PwaUl>
      <PwaLi>
        Tap the Bookmark icon at the bottom of the screen ( iPhones ) or top
        right of the screen ( iPads )
        <br />
        <span>( it resembles a box with an upward-pointing arrow ).</span>
      </PwaLi>
      <PwaLi>tap "Add to Home Screen".</PwaLi>

      <PwaLi>Wait a second for the app's logo to load.</PwaLi>
      <PwaLi>
        Accept the ADI Manager name for the shortcut
        <br />
        <span>( or enter one you like better ).</span>
      </PwaLi>
      <PwaLi>tap "Add" to save the new shortcut icon to the home screen</PwaLi>
      <p>
        you can then access it as you would access an app downloaded from the
        apple app store!
      </p>
    </PwaUl>

    <CloseInstructionsButton onClick={() => setShowIos(false)}>
      ok, close
    </CloseInstructionsButton>
  </InstructionsDiv>
);

export default IosInstructions;
