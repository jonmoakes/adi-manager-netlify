import { Link } from "react-router-dom";

import FloatingAddButton from "../../../components/floating-add-button/floating-add-button.component";
import HelpText from "../../../components/tables/help-text.component";
import DTable from "./diary-table/d-table.component";

import { Container } from "../../../styles/container/container.styles";
import { Div } from "../../../styles/div/div.styles";
import { Heading } from "../../../styles/h1/h1.styles";

import { addDiaryEntryPath } from "../../../strings/strings";

const DiaryTable = () => (
  <Container>
    <Link to={addDiaryEntryPath}>
      <FloatingAddButton />
    </Link>

    <Div>
      <Heading>Diary</Heading>
      <HelpText />
    </Div>

    <DTable />
  </Container>
);

export default DiaryTable;
