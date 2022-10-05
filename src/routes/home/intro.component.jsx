import { Div  } from "../../styles/div/div.styles";
import { H2 } from "../../styles/h2/h2.styles";
import { RedLi } from "../../styles/li/li.styles";

const Intro = () => (
  <Div>
    <H2>for the UK based ADI</H2>
    <p>the new version of the successful ADI Manager iOS app!</p>
    <p>
      now available for all devices and includes data synching between your
      devices!
    </p>

    <p>Safely & securely store:</p>
    <ul>
      <RedLi>Appointments</RedLi>
      <RedLi>Lesson Information</RedLi>
      <RedLi>Income / Expenses Information</RedLi>
      <RedLi>Pupil Information</RedLi>
    </ul>
  </Div>
);

export default Intro;
