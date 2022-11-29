import { Link } from "react-router-dom";

import { Container } from "../../styles/container/container.styles";
import { Div, FlexColumnCenteredDiv } from "../../styles/div/div.styles";
import { Heading } from "../../styles/h1/h1.styles";
import {
  MoneyOptionsIncomeButton,
  MoneyOptionsExpensesButton,
  MoneyOptionsExpensesWeekButton,
  MoneyOptionsExpensesMonthButton,
  MoneyOptionsExpensesYearButton,
} from "../../styles/buttons/buttons.styles";
import { MoneyOptionsText } from "../../styles/text/text.styles";

import {
  incomePath,
  expensesPath,
  totalExpensesWeekPath,
  totalExpensesMonthPath,
  totalExpensesYearPath,
} from "../../strings/strings";

const MoneyOptions = () => (
  <Container>
    <Div>
      <Heading>Money</Heading>
    </Div>

    <Div>
      <FlexColumnCenteredDiv>
        <Link to={incomePath}>
          <MoneyOptionsIncomeButton>Income</MoneyOptionsIncomeButton>
        </Link>

        <Link to={expensesPath}>
          <MoneyOptionsExpensesButton>Expenses</MoneyOptionsExpensesButton>
        </Link>

        <MoneyOptionsText>total expenses</MoneyOptionsText>

        <Link to={totalExpensesWeekPath}>
          <MoneyOptionsExpensesWeekButton>
            Week Ending Entries
          </MoneyOptionsExpensesWeekButton>
        </Link>

        <Link to={totalExpensesMonthPath}>
          <MoneyOptionsExpensesMonthButton>
            Monthly Entries
          </MoneyOptionsExpensesMonthButton>
        </Link>

        <Link to={totalExpensesYearPath}>
          <MoneyOptionsExpensesYearButton>
            Yearly Entries
          </MoneyOptionsExpensesYearButton>
        </Link>
      </FlexColumnCenteredDiv>
    </Div>
  </Container>
);

export default MoneyOptions;
