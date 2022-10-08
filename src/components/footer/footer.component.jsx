import PwaInstructions from "./pwa-intructions.component";
import Links from "./links.component";

import { FooterDiv } from "../../styles/div/div.styles";
import { PwaTopHr } from "../../styles/hr/hr.styles";

const Footer = () =>  (
    <FooterDiv>
      <PwaTopHr />
        <PwaInstructions />
        <Links />
    </FooterDiv>
  );

export default Footer;
