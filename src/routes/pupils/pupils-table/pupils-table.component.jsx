import { Link } from "react-router-dom";

import PupTable from "./pup-table.component";
import HelpText from "../../../components/tables/help-text.component";
import FloatingAddButton from "../../../components/floating-add-button/floating-add-button.component";

import { Container } from "../../../styles/container/container.styles";
import { Div } from "../../../styles/div/div.styles";
import { Heading } from "../../../styles/h1/h1.styles";

import { addPupilEntryPath } from "../../../strings/strings";

const PupilsTableViewPage = () => (
  <Container>
    <Link to={addPupilEntryPath}>
      <FloatingAddButton />
    </Link>

    <Div>
      <Heading>Pupils</Heading>
      <HelpText />
    </Div>

    <PupTable />
  </Container>
);

export default PupilsTableViewPage;
