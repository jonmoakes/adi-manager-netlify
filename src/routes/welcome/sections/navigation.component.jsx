import { InfoButton } from "../../../styles/buttons/buttons.styles";
import { Div } from "../../../styles/div/div.styles";

const Navigation = () => (
  <Div>
    <p>
      you can tap any of the icons in the header or footer to go to their
      respective pages.
    </p>
    <p>additional help for each page is available by tapping the</p>
    <InfoButton />
    <p>on those pages.</p>
    <p>tap the adi manager logo in the top left to return to the home page.</p>
  </Div>
);

export default Navigation;
