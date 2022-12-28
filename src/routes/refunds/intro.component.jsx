import { Div } from "../../styles/div/div.styles";
import { HighlightText } from "../../styles/span/span.styles";

const Intro = () => (
  <Div>
    <p>I want you to be completely satisfied with your purchase!</p>
    <p>
      however, if you are not satisfied for any reason,{" "}
      <HighlightText>within 30 days of your original purchase</HighlightText>,
      you can request a full refund -{" "}
      <HighlightText>no questions asked</HighlightText>!
    </p>
  </Div>
);

export default Intro;
