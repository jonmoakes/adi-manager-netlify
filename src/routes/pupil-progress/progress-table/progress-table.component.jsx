import { Link } from "react-router-dom";

import ProgTable from "./prog-table.component";
import HelpText from "../../../components/tables/help-text.component";
import FloatingAddButton from "../../../components/floating-add-button/floating-add-button.component";

import { Container } from "../../../styles/container/container.styles";
import { Div } from "../../../styles/div/div.styles";
import { Heading } from "../../../styles/h1/h1.styles";

import { addPupilProgressEntryPath } from "../../../strings/strings";

const ProgressTable = () => (
  <Container>
    <Link to={addPupilProgressEntryPath}>
      <FloatingAddButton />
    </Link>

    <Div>
      <Heading>pupil progress</Heading>
      <HelpText />
    </Div>

    <ProgTable />
  </Container>
);

export default ProgressTable;
