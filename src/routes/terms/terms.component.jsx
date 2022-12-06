import LastUpdated from "./sections/last-updated.component";
import AgreementToTerms from "./sections/agreement-to-terms.component";
import IntellectualPropertyRights from "./sections/intellectual-property-rights.component";
import UserRepresentations from "./sections/user-representations.component";
import UserRegistration from "./sections/user-registration.component";
import SupportedBrowsers from "./sections/supported-browsers.component";
import FeesAndPayment from "./sections/fees-and-payment.component";
import Cancellation from "./sections/cancellation.component";
import Refunds from "./sections/refunds.component";
import ProhibitedActivities from "./sections/prohibited-activities.component";
import UserGeneratedContributions from "./sections/user-generated-contributions.component";
import ContributionLicence from "./sections/contribution-licence.component";
import MobileAppUseLicence from "./sections/mobile-app-use-licence.component";
import Submissions from "./sections/submissions.component";
import ThirdPartyWebsitesAndContent from "./sections/third-party-websites-and-content.component";
import SiteManagement from "./sections/site-management.component";
import CopyrightInfringements from "./sections/copyright-infringements.component";
import TermAndTermination from "./sections/term-and-termination.component";
import ModificationAndInterruptions from "./sections/modification-and-interruptions.component";
import GoverningLaw from "./sections/governing-law.component";
import Corrections from "./sections/corrections.component";
import Disclaimer from "./sections/disclaimer.component";
import Indemnification from "./sections/indemnification.component";
import UserData from "./sections/user-data.component";
import ElectronicCommunications from "./sections/electronic-communications.component";
import Miscellaneous from "./sections/miscellaneous.component";
import ContactUs from "./sections/contact-us.component";

import { Container } from "../../styles/container/container.styles";
import { Div } from "../../styles/div/div.styles";
import { Heading } from "../../styles/h1/h1.styles";

const Terms = () => {
  return (
    <Container>
      <Div>
        <Heading>terms & conditions:</Heading>
      </Div>

      <LastUpdated />
      <AgreementToTerms />
      <IntellectualPropertyRights />
      <UserRepresentations />
      <UserRegistration />
      <SupportedBrowsers />
      <FeesAndPayment />
      <Cancellation />
      <Refunds />
      <ProhibitedActivities />
      <UserGeneratedContributions />
      <ContributionLicence />
      <MobileAppUseLicence />
      <Submissions />
      <ThirdPartyWebsitesAndContent />
      <SiteManagement />
      <CopyrightInfringements />
      <TermAndTermination />
      <ModificationAndInterruptions />
      <GoverningLaw />
      <Corrections />
      <Disclaimer />
      <Indemnification />
      <UserData />
      <ElectronicCommunications />
      <Miscellaneous />
      <ContactUs />
    </Container>
  );
};

export default Terms;
