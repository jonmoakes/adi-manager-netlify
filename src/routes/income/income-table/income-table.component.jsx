import { Link } from "react-router-dom";

import FloatingAddButton from "../../../components/floating-add-button/floating-add-button.component";
import HelpText from "../../../components/tables/help-text.component";
import IncTable from "./inc-table.component";

import { Container } from "../../../styles/container/container.styles";
import { Div } from "../../../styles/div/div.styles";
import { Heading } from "../../../styles/h1/h1.styles";

import { addIncomeEntryPath } from "../../../strings/strings";

const IncomeTableViewPage = () => (
  <Container>
    <Link to={addIncomeEntryPath}>
      <FloatingAddButton />
    </Link>

    <Div>
      <Heading>Income</Heading>
      <HelpText />
    </Div>

    <IncTable />
  </Container>
);

export default IncomeTableViewPage;
