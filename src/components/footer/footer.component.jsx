import PwaInstructions from "./pwa-intructions.component";
import Links from "./links.component";

import { Div } from "../../styles/div/div.styles";
import { PwaTopHr } from "../../styles/hr/hr.styles";

const Footer = () =>  (
    <Div>
      <PwaTopHr />
        <PwaInstructions />
        <Links />
    </Div>
  );

export default Footer;
