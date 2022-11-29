import { Link } from "react-router-dom";

import FloatingAddButton from "../../../components/floating-add-button/floating-add-button.component";
import HelpText from "../../../components/tables/help-text.component";
import ExpensesMonthTable from "./expenses-month-table.component";

import { Container } from "../../../styles/container/container.styles";
import { Div } from "../../../styles/div/div.styles";
import { Heading } from "../../../styles/h1/h1.styles";

import { addTotalExpensesMonthEntryPath } from "../../../strings/strings";

const TotalExpensesMonthTableViewPage = () => (
  <Container>
    <Link to={addTotalExpensesMonthEntryPath}>
      <FloatingAddButton />
    </Link>

    <Div>
      <Heading>Total Expenses For The Week Ending:</Heading>
      <HelpText />
    </Div>

    <ExpensesMonthTable />
  </Container>
);

export default TotalExpensesMonthTableViewPage;
