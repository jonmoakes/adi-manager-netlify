import { MonthlyPriceSpan } from "../../styles/span/span.styles";
const MonthInfo = () => (
  <>
    <h2>Monthly subscription</h2>

    <p>
      Billed monthly at just <MonthlyPriceSpan>£4 A Month!</MonthlyPriceSpan>
    </p>
    <p>
      that's Just <MonthlyPriceSpan>93 pence Per Week!</MonthlyPriceSpan>
    </p>
  </>
);

export default MonthInfo;
