import ProgressiveImg from "../../components/progressive-image/progressive-image.component";

import ImagePlaceHolder from "../../assets/image-placeholder.jpeg";

import { Div } from "../../styles/div/div.styles";
import { ImageDiv } from "../../styles/image/image.styles";
import { DiaryTable } from "../../image-links/image-links";
import { H2 } from "../../styles/h2/h2.styles";

const DiarySection = () => (
  <Div>
    <H2>Diary:</H2>
    <p>select a date and enter your days diary.</p>
    <p>the info will then be stored in a table for you to view at a tap.</p>

    <ImageDiv>
      <a href={DiaryTable}>
        <ProgressiveImg
          src={DiaryTable}
          alt="Driving Instructor App Diary Table"
          placeholderSrc={ImagePlaceHolder}
        />
      </a>
    </ImageDiv>

    <p>
      a simple text box with infinite space is provided, so that you can write
      out your diary in whichever way you choose.
    </p>
    <p>
      the information is searchable for easy access and you can easily update or
      delete entries.
    </p>
    <p>
      you can sort the table in ascending or descending order of date. all
      entries automatically insert themselves into date order.
    </p>
  </Div>
);

export default DiarySection;
