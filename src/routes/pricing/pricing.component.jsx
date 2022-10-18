import { Link } from "react-router-dom";

import CustomButton from "../../components/custom-button/custom-button.component";

import { Container } from "../../styles/container/container.styles";
import { Div } from "../../styles/div/div.styles";
import { Heading } from "../../styles/h1/h1.styles";
import { StyledLink } from "../../styles/link/link.styles";
import { HighlightText } from "../../styles/span/span.styles";
import { Href } from "../../styles/a/a.styles";
import { RedH2Underline } from "../../styles/h2/h2.styles";
import { Stripe } from "../../styles/svg/svg.styles";

import {
  featuresPath,
  aboutMePath,
  contactPath,
  refundsPath,
} from "../../strings/strings";

const Pricing = () => (
  <Container>
    <Div>
      <Heading>Pricing</Heading>
    </Div>

    <Div>
      <p>
        with all the <StyledLink to={featuresPath}>features</StyledLink> you get
        in this app, combined with Data syncing across all devices,
      </p>
      <hr />
      <p>
        the ADI Manager app is just <HighlightText>£4 a month!</HighlightText>
      </p>
      <p>
        ( that's just <HighlightText>93p per week</HighlightText>! )
      </p>
      <hr />
      <p>
        you can also pay per year with a{" "}
        <HighlightText>10% discount</HighlightText> for just{" "}
        <HighlightText>£43</HighlightText> a year!
      </p>
      <p>
        ( that's just <HighlightText>83p per week</HighlightText>! )
      </p>
      <hr />
    </Div>

    <Div>
      <RedH2Underline>easily Cancel Anytime!</RedH2Underline>
      <p>
        i don't know about you, but nothing annoys me more than websites / apps,
        that make it deliberately difficult to cancel a subscription - normally
        by making the cancel page hard to find or omitting it altogether!
      </p>
      <p>
        so I wanted to make it simple. thanks to partnering with{" "}
        <Href href="https://stripe.com/gb">stripe</Href>, the ADI manager offers
        your own personal customer portal, where you can easily{" "}
        <HighlightText>Cancel at any time</HighlightText> in just a few clicks
        from your account page. once cancelled, your subscription continues to
        the end of your current billing period.
      </p>
      <RedH2Underline>There Is Nothing To Lose!</RedH2Underline>
      <p>
        <HighlightText>within 30 days of purchase</HighlightText>, you are not
        completely satisfied, simply{" "}
        <StyledLink to={contactPath}>Contact Me</StyledLink> and ask for a full
        refund -<br />
        <HighlightText>No Questions Asked</HighlightText>!
      </p>
      <p>
        please see the <StyledLink to={refundsPath}>refunds policy</StyledLink>{" "}
        for more info!
      </p>
    </Div>

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

    <Div>
      <Link to={aboutMePath}>
        <CustomButton>About Me</CustomButton>
      </Link>
    </Div>
  </Container>
);

export default Pricing;
