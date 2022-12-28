import ProgressiveImg from "../../components/progressive-image/progressive-image.component";

import ImagePlaceHolder from "../../assets/image-placeholder.jpeg";

import { Div } from "../../styles/div/div.styles";
import { ImageDiv } from "../../styles/image/image.styles";
import { H2Underline } from "../../styles/h2/h2.styles";
import { RedLi } from "../../styles/li/li.styles";
import { CallText, SubjectsList, Slider } from "../../image-links/image-links";

const PupilsSection = () => (
  <Div>
    <H2Underline>pupils Section</H2Underline>
    <p>
      here you can store lots of information about your pupils for easy access.
    </p>
    <p>you can store:</p>
    <ul>
      <RedLi>Pupil Name</RedLi>
      <RedLi>address</RedLi>
      <RedLi>pick up / drop off address</RedLi>
      <RedLi>email address</RedLi>
      <RedLi>phone number</RedLi>
      <RedLi>date of birth</RedLi>
      <RedLi>driving licence number </RedLi>
      <RedLi>licence expiry date</RedLi>
      <RedLi>eyesight checked date</RedLi>
      <RedLi>glasses required?</RedLi>
      <RedLi>medical conditions</RedLi>
      <RedLi>experience level</RedLi>
      <RedLi>theory test passed?</RedLi>
      <RedLi>theory test date</RedLi>
      <RedLi>theory test certificate number</RedLi>
      <RedLi>driving test date</RedLi>
      <RedLi>driving test time</RedLi>
      <RedLi>driving test location</RedLi>
      <RedLi>driving test result</RedLi>
    </ul>
    <p>
      you can call, text or email your pupil at the touch of a button from
      within the app!
    </p>
    <ImageDiv>
      <a href={CallText}>
        <ProgressiveImg
          src={CallText}
          alt="Driving Instructor App Pupil Data"
          placeholderSrc={ImagePlaceHolder}
        />
      </a>
    </ImageDiv>
    <p>
      you can also grade a pupil's progress on the most recent lesson, or in
      each individual lesson subject!
    </p>
    <p>
      using a slider, you grade the pupil's performance 1-5 and then fill in any
      details that might help you or them from the lesson.
    </p>
    <ImageDiv>
      <a href={Slider}>
        <ProgressiveImg
          src={Slider}
          alt="Driving Instructor App Pupil Grade"
          placeholderSrc={ImagePlaceHolder}
        />
      </a>
    </ImageDiv>
    <p>
      when you have graded a subject, its button colour will change depending on
      the grading - red for grade 1, yellow for grade 2-4 and green for grade 5.
    </p>
    <p>
      this way, you can easily see at a glance which subjects you need to work
      on with your pupil.
    </p>
    <ImageDiv>
      <a href={SubjectsList}>
        <ProgressiveImg
          src={SubjectsList}
          alt="Driving Instructor App Grade Subjects"
          placeholderSrc={ImagePlaceHolder}
        />
      </a>
    </ImageDiv>
    <p>
      there is also a "latest lesson" slider and info box where you can simply
      grade the latest lesson and write notes.
    </p>
    <p>
      this can then be easily emailed to your pupil as a lesson report for their
      reference.
    </p>
  </Div>
);

export default PupilsSection;
