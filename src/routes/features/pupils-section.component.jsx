import ProgressiveImg from "../../components/progressive-image/progressive-image.component";

import ImagePlaceHolder from "../../assets/image-placeholder.jpeg";

import { Div } from "../../styles/div/div.styles";
import { ImageDiv } from "../../styles/image/image.styles";
import { H2 } from "../../styles/h2/h2.styles";
import { CallText, SubjectsList, Slider } from "../../image-links/image-links";

const PupilsSection = () => (
  <Div>
    <H2>pupils Section</H2>
    <p>
      here you can store lots of information about your pupils for easy access.
    </p>
    <p>you can store:</p>
    <ul>
      <li>Pupil Name</li>
      <li>address</li>
      <li>pick up / drop off address</li>
      <li>email address</li>
      <li>phone number</li>
      <li>date of birth</li>
      <li>driving licence number </li>
      <li>licence expiry date</li>
      <li>eyesight checked date</li>
      <li>glasses required?</li>
      <li>medical conditions</li>
      <li>experience level</li>
      <li>theory test passed?</li>
      <li>theory test date</li>
      <li>theory test certificate number</li>
      <li>driving test date</li>
      <li>driving test time</li>
      <li>driving test location</li>
      <li>driving test result</li>
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
