import ProgressiveImg from "../../components/progressive-image/progressive-image.component";

import ImagePlaceHolder from "../../assets/image-placeholder.jpeg";

import { Div } from "../../styles/div/div.styles";
import { ImageDiv } from "../../styles/image/image.styles";
import { H2Underline } from "../../styles/h2/h2.styles";
import { RedLi } from "../../styles/li/li.styles";

import { incomeTable, ExpensesTable } from "../../image-links/image-links";

const IncomeExpensesSection = () => (
  <Div>
    <H2Underline>Income / Expenses:</H2Underline>
    <p>
      in this section, you will find easy ways of keeping track of your income
      and expenditure.
    </p>
    <p>for income, you input:</p>
    <ul>
      <RedLi>the pupils name</RedLi>
      <RedLi>the date of the income</RedLi>
      <RedLi>how much income you received</RedLi>
    </ul>
    <p>the data will be displayed in a table for you to view.</p>
    <ImageDiv>
      <a href={incomeTable}>
        <ProgressiveImg
          src={incomeTable}
          alt="Driving Instructor App Income Table"
          placeholderSrc={ImagePlaceHolder}
        />
      </a>
    </ImageDiv>

    <H2Underline>expenses:</H2Underline>
    <p>in this section, you can keep track of your business expenditure.</p>
    <p>enter in the:</p>
    <ul>
      <RedLi>date of the receipt</RedLi>
      <RedLi>description of the receipt ( fuel etc )</RedLi>
      <RedLi>the amount of the receipt</RedLi>
    </ul>
    <p>
      if you were a user of the original IOS ADI Manager app, you may wonder
      where the option to take an image of your receipt has gone.
    </p>
    <p>
      due to the new ability to sync data on the app thanks to the Firebase
      database, i decided to remove this feature.
    </p>
    <p>
      the reason for this being that images take up a huge amount of space on a
      database, and storing hundreds and hundreds of user's images on the
      database would increase the cost of the app to cover this.
    </p>
    <p>
      therefore, i decided to remove this feature to keep the price of the app
      down for users, to what you hopefully agree is a very competitive rate!
    </p>
    <ImageDiv>
      <a href={ExpensesTable}>
        <ProgressiveImg
          src={ExpensesTable}
          alt="Driving Instructor App Expenses Table"
          placeholderSrc={ImagePlaceHolder}
        />
      </a>
    </ImageDiv>
    <p>
      this is a good way to digitally store your receipt information, saving you
      lots of hassle come tax return time!
    </p>
    <p>
      you can also select multiple entries in the income & expenses tables,
      which will automatically add their amounts together, making it easy for
      you to use that data in the next step which is:
    </p>
    <H2Underline>total expenses</H2Underline>
    <p>
      you can also add the results of your expenses to a weekly, monthly or even
      yearly table for you to easily see your data.
    </p>
  </Div>
);

export default IncomeExpensesSection;
