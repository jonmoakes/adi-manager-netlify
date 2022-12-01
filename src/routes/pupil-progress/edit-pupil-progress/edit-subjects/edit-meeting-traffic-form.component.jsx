// import useShowSubject from "../../../../custom-hooks/what-to-render-logic/use-show-subject";

// import SubjectButton from "../../../../components/subject-button/subject-button.component";
// import OneStar from "../../add-pupil-progress-page/stars/one-star.component";
// import TwoStars from "../../add-pupil-progress-page/stars/two-stars.component";
// import ThreeStars from "../../add-pupil-progress-page/stars/three-stars.component";
// import FourStars from "../../add-pupil-progress-page/stars/four-stars.component";
// import FiveStars from "../../add-pupil-progress-page/stars/five-stars.component";
// import CurrentGradingInfo from "../../add-pupil-progress-page/current-grading-info.component";

// import {
//   SubjectsDiv,
//   SubjectsInputsDiv,
//   StarsDiv,
//   Hr,
//   SliderDiv,
//   AnimatedForm,
// } from "../../pupil-progress.styles";

// import { placeholderInfiniteSpaceMessage } from "../../../../resuable-messages/reusable-messages";

// const EditMeetingTrafficForm = ({ updatedEntry, handleChange }) => {
//   const { showSubject, handleClick } = useShowSubject();
//   const { id, meetingGrade, meetingNotes } = updatedEntry;
//   return (
//     <AnimatedForm>
//       <Hr />

//       <SubjectsDiv>
//         {!showSubject && meetingGrade === "1" && (
//           <SubjectButton isGrade1 onClick={handleClick}>
//             Show Meeting Traffic
//           </SubjectButton>
//         )}

//         {((!showSubject && meetingGrade === "2") ||
//           (!showSubject && meetingGrade === "3") ||
//           (!showSubject && meetingGrade === "4")) && (
//           <SubjectButton isGrade2To4 onClick={handleClick}>
//             Show Meeting Traffic
//           </SubjectButton>
//         )}

//         {!showSubject && meetingGrade === "5" && (
//           <SubjectButton isGrade5 onClick={handleClick}>
//             Show Meeting Traffic
//           </SubjectButton>
//         )}

//         {showSubject && (
//           <>
//             <SubjectButton isHide onClick={handleClick}>
//               Hide Meeting Traffic
//             </SubjectButton>

//             <SubjectsInputsDiv>
//               <h2>Meeting Traffic:</h2>

//               <StarsDiv>
//                 {meetingGrade === "1" && <OneStar />}
//                 {meetingGrade === "2" && <TwoStars />}
//                 {meetingGrade === "3" && <ThreeStars />}
//                 {meetingGrade === "4" && <FourStars />}
//                 {meetingGrade === "5" && <FiveStars />}
//               </StarsDiv>

//               <SliderDiv>
//                 <CurrentGradingInfo />
//                 <input
//                   className="slider"
//                   id={id}
//                   type="range"
//                   name="meetingGrade"
//                   min="1"
//                   max="5"
//                   defaultValue={meetingGrade}
//                   onChange={handleChange}
//                 />
//               </SliderDiv>

//               <label className="slide">Meeting Traffic Notes:</label>
//               <textarea
//                 className="slide"
//                 id={id}
//                 defaultValue={meetingNotes}
//                 type="text"
//                 name="meetingNotes"
//                 onChange={handleChange}
//                 placeholder={placeholderInfiniteSpaceMessage}
//               />
//             </SubjectsInputsDiv>
//           </>
//         )}
//       </SubjectsDiv>
//     </AnimatedForm>
//   );
// };

// export default EditMeetingTrafficForm;
