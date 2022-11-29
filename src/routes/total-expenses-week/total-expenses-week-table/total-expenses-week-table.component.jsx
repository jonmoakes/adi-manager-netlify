import { Link } from "react-router-dom";

import FloatingAddButton from "../../../components/floating-add-button/floating-add-button.component";
import HelpText from "../../../components/tables/help-text.component";
import ExpensesWeekTable from "./expenses-week-table.component";

import { Container } from "../../../styles/container/container.styles";
import { Div } from "../../../styles/div/div.styles";
import { Heading } from "../../../styles/h1/h1.styles";

import { addTotalExpensesWeekEntryPath } from "../../../strings/strings";

const TotalExpensesWeekTable = () => (
  <Container>
    <Link to={addTotalExpensesWeekEntryPath}>
      <FloatingAddButton />
    </Link>

    <Div>
      <Heading>Total Expenses For The Week Ending:</Heading>
      <HelpText />
    </Div>

    <ExpensesWeekTable />
  </Container>
);

export default TotalExpensesWeekTable;
