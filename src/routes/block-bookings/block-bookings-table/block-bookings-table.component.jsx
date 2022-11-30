import { Link } from "react-router-dom";

import FloatingAddButton from "../../../components/floating-add-button/floating-add-button.component";
import HelpText from "../../../components/tables/help-text.component";
import BlockTable from "./block-table.component";

import { Container } from "../../../styles/container/container.styles";
import { Div } from "../../../styles/div/div.styles";
import { Heading } from "../../../styles/h1/h1.styles";

import { addBlockBookingEntryPath } from "../../../strings/strings";

const BlockBookingsTable = () => (
  <Container>
    <Link to={addBlockBookingEntryPath}>
      <FloatingAddButton />
    </Link>

    <Div>
      <Heading>block bookings</Heading>
      <HelpText />
    </Div>

    <BlockTable />
  </Container>
);

export default BlockBookingsTable;
