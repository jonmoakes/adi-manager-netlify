import ProgressiveImg from "../../components/progressive-image/progressive-image.component";

import ImagePlaceHolder from "../../assets/image-placeholder.jpeg";

import { Div } from "../../styles/div/div.styles";
import { ImageDiv } from "../../styles/image/image.styles";
import { H2Underline } from "../../styles/h2/h2.styles";
import { RedLi } from "../../styles/li/li.styles";

import { LessonTable, LessonEntry } from "../../image-links/image-links";

const LessonSection = () => (
  <Div>
    <H2Underline>Lessons:</H2Underline>
    <p>store records of your lessons with any of the following details:</p>
    <ul>
      <RedLi>pupil name</RedLi>
      <RedLi>lesson date</RedLi>
      <RedLi>Lesson start / end time</RedLi>
      <RedLi>has the pupil paid?</RedLi>
      <RedLi>lesson summary</RedLi>
      <RedLi>next lesson plan</RedLi>
      <RedLi>next lesson date</RedLi>
      <RedLi>next lesson time</RedLi>
      <RedLi>next lesson pick up</RedLi>
      <RedLi>driving test details</RedLi>
    </ul>
    <p>
      only the name and date are required, all other fields are optional
      depending on what data you'd like to store.
    </p>
    <ImageDiv>
      <a href={LessonEntry}>
        <ProgressiveImg
          src={LessonEntry}
          alt="Driving Instructor App Add Lesson Entry"
          placeholderSrc={ImagePlaceHolder}
        />
      </a>
    </ImageDiv>
    <p>
      the data is stored in a table format and is easily searchable, editable
      and deletable.
    </p>
    <p>
      a useful feature is that if the pupil has not paid you, then the cell in
      the table is coloured red. if they have paid, it's coloured green.
    </p>
    <ImageDiv>
      <a href={LessonTable}>
        <ProgressiveImg
          src={LessonTable}
          alt="Driving Instructor App Lesson Table"
          placeholderSrc={ImagePlaceHolder}
        />
      </a>
    </ImageDiv>
    <p>
      this way, you can easily see at a glance who has paid you and who has not!
    </p>
    <p>
      when they pay you, you can update the entry and the cell will turn to
      green.
    </p>
  </Div>
);

export default LessonSection;
