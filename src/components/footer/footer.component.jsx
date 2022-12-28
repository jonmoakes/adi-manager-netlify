import PwaInstructions from "./pwa-intructions.component";
import useShouldDisplayFooter from "./use-should-display-footer";

import Links from "./links.component";

import { FooterDiv } from "../../styles/div/div.styles";

const Footer = () => {
  const { shouldDisplayFooter } = useShouldDisplayFooter();

  return (
    <>
      {shouldDisplayFooter && (
        <FooterDiv>
          <hr />
          <PwaInstructions />
          <Links />
        </FooterDiv>
      )}
    </>
  );
};

export default Footer;
