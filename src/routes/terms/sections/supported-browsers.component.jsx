import { Div } from "../../../styles/div/div.styles";
import { H2Underline } from "../../../styles/h2/h2.styles";
import { RedLi } from "../../../styles/li/li.styles";

const SupportedBrowsers = () => (
  <Div>
    <H2Underline>SUPPORTED BROWSERS:</H2Underline>
    <p>
      the adi manager app has been thoroughly tested on the following browsers:
    </p>
    <ul>
      <RedLi>brave</RedLi>
      <RedLi>mozilla firefox</RedLi>
      <RedLi>google chrome</RedLi>
      <RedLi>microsoft edge</RedLi>
      <RedLi> safari</RedLi>
    </ul>
    <p>
      all other browsers are supported but may not perform as well as the
      browsers listed above.
    </p>
    <p>
      please make sure you are running the latest version of your browser to
      ensure you have access to the most up to date features and the most
      reliable experience.
    </p>
  </Div>
);

export default SupportedBrowsers;
