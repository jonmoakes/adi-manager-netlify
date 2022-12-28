import { Div } from "../../../styles/div/div.styles";
import { H2Underline } from "../../../styles/h2/h2.styles";
import { StyledLink } from "../../../styles/link/link.styles";

import { privacyPolicyPath } from "../../../strings/strings";

const SiteManagement = () => (
  <Div>
    <H2Underline>SITE MANAGEMENT:</H2Underline>
    <p>
      We reserve the right, but not the obligation to: (1) monitor the site for
      violations of these terms of use; (2) take appropriate legal action
      against anyone who, on our sole discretion, violates the law or these
      terms of use, including without limitation, reporting such user to law
      enforcement authorities; (3) in our sole discretion and without
      limitation, refuse, restrict access to, limit the availability of, or
      disable (to the extent technologically feasible ) any of your
      contributions or any portion thereof; (4) in our sole discretion and
      without limitation, notice, or liability, to remove from the site or
      otherwise disable all files and content that are excessivein size or are
      in any way burdensome to our systems; and (5) otherwise manage the site in
      a manner designed to protect our rights and property and to facilitate the
      proper functioning of the site. PRIVACY POLICY we care about data privacy
      and security. please review our{" "}
      <StyledLink to={privacyPolicyPath}>privacy policy</StyledLink>
    </p>
    <p>
      by using the site, you agree to be bound by the privacy policy, which is
      incorporated in these terms of use. please be advised that the site is
      hosted in the united kingdom. if you access the site from any other region
      in the worldwith laws or requirements governing personal data collection,
      use, or disclosure that differ from the applicable laws in the untied
      kingdom, then through your continued use of the site, you are transferring
      your data to the united kingdom, and you agree to have your data
      tansferred to and processed in the united kingdom.
    </p>
  </Div>
);

export default SiteManagement;
