import { Div } from "../../styles/div/div.styles";
import { Href } from "../../styles/a/a.styles";

const SectionFour = () => (
  <Div>
    <p>4: Stripe Cookies:</p>
    <p>
      4.1: our payment processor stripe uses cookies on our site for fraud
      prevention.
    </p>
    <p>
      4.2:you can read their privacy policy{" "}
      <Href href="https://stripe.com/en-gb/privacy">here</Href>.
    </p>
  </Div>
);

export default SectionFour;
