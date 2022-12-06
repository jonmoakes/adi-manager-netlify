import { CreditsLinkDiv } from "../../styles/div/div.styles";
import { LowercaseHref } from "../../styles/a/a.styles";

const CreditCardIcon = () => (
  <CreditsLinkDiv>
    <span>
      Credit Card icon by:
      <br />
      <LowercaseHref
        href="https://www.flaticon.com/authors/monkik"
        title="monkik"
      >
        monkik
      </LowercaseHref>{" "}
      from{" "}
      <LowercaseHref href="https://www.flaticon.com/" title="Flaticon">
        www.flaticon.com
      </LowercaseHref>
    </span>
  </CreditsLinkDiv>
);

export default CreditCardIcon;
