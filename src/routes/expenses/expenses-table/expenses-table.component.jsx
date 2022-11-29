import { Link } from "react-router-dom";

import FloatingAddButton from "../../../components/floating-add-button/floating-add-button.component";
import HelpText from "../../../components/tables/help-text.component";
import ExpTable from "./exp-table.component";

import { Container } from "../../../styles/container/container.styles";
import { Div } from "../../../styles/div/div.styles";
import { Heading } from "../../../styles/h1/h1.styles";

import { addExpensesEntryPath } from "../../../strings/strings";

const ExpensesTable = () => (
  <Container>
    <Link to={addExpensesEntryPath}>
      <FloatingAddButton />
    </Link>

    <Div>
      <Heading>Expenses</Heading>
      <HelpText />
    </Div>

    <ExpTable />
  </Container>
);

export default ExpensesTable;
