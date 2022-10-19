import { Div } from "../../../styles/div/div.styles";
import { HighlightText } from "../../../styles/span/span.styles";

const Intro = () => (
  <Div>
    <p>your payment has been successful and your account has been activated!</p>
    <p>
      scroll to the bottom of the page and tap the{" "}
      <HighlightText>"enter the app"</HighlightText> button when you're ready.
    </p>
    <p>before you do, here is some basic information to get you started.</p>
  </Div>
);

export default Intro;
