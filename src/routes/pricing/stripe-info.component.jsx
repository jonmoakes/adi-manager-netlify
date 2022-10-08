import { Div } from "../../styles/div/div.styles";
import { Stripe } from "../../styles/svg/svg.styles";
import { Href } from "../../styles/a/a.styles";

const StripeInfo = () => (
  <Div>
    <p>Our Payment processor is</p>
    <Href href="https://stripe.com/gb/customers">
      <Stripe />
    </Href>
    <p>
      one of the biggest companies in the online payments world, so you can be
      sure your transaction is safe!
    </p>
    <p>tap the logo for more info about stripe.</p>
  </Div>
);

export default StripeInfo;
