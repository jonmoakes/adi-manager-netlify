import { Link } from "react-router-dom";

import FloatingAddButton from "../../../components/floating-add-button/floating-add-button.component";
import HelpText from "../../../components/tables/help-text.component";
import ExpensesYearTable from "./expenses-year-table.component";

import { Container } from "../../../styles/container/container.styles";
import { Div } from "../../../styles/div/div.styles";
import { Heading } from "../../../styles/h1/h1.styles";

import { addTotalExpensesYearEntryPath } from "../../../strings/strings";

const TotalExpensesYearTableViewPage = () => (
  <Container>
    <Link to={addTotalExpensesYearEntryPath}>
      <FloatingAddButton />
    </Link>

    <Div>
      <Heading>Total Expenses For The Year:</Heading>
      <HelpText />
    </Div>

    <ExpensesYearTable />
  </Container>
);

export default TotalExpensesYearTableViewPage;
