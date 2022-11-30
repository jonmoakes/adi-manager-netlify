import { Link } from "react-router-dom";

import { Container } from "../../styles/container/container.styles";
import { Div, FlexColumnCenteredDiv } from "../../styles/div/div.styles";
import { Heading } from "../../styles/h1/h1.styles";
import {
  PupilOptionsPupilButton,
  PupilOptionsBlockBookingButton,
  PupilOptionsProgressButton,
} from "../../styles/buttons/buttons.styles";

import {
  pupilsPath,
  blockBookingPath,
  pupilProgressPath,
} from "../../strings/strings";

const PupilOptions = () => (
  <Container>
    <Div>
      <Heading>Pupil Options</Heading>
    </Div>

    <Div>
      <FlexColumnCenteredDiv>
        <Link to={pupilsPath}>
          <PupilOptionsPupilButton>Pupil Info</PupilOptionsPupilButton>
        </Link>
        <Link to={blockBookingPath}>
          <PupilOptionsBlockBookingButton>
            Pupil Block Bookings
          </PupilOptionsBlockBookingButton>
        </Link>
        <Link to={pupilProgressPath}>
          <PupilOptionsProgressButton>
            Pupil Progress
          </PupilOptionsProgressButton>
        </Link>
      </FlexColumnCenteredDiv>
    </Div>
  </Container>
);

export default PupilOptions;
