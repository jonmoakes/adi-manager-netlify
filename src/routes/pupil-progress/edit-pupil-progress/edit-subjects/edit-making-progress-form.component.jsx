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

// const EditMakingProgressForm = ({ updatedEntry, handleChange }) => {
//   const { showSubject, handleClick } = useShowSubject();
//   const { id, makingProgressGrade, makingProgressNotes } = updatedEntry;

//   return (
//     <AnimatedForm>
//       <Hr />

//       <SubjectsDiv>
//         {!showSubject && makingProgressGrade === "1" && (
//           <SubjectButton isGrade1 onClick={handleClick}>
//             Show making progress
//           </SubjectButton>
//         )}

//         {((!showSubject && makingProgressGrade === "2") ||
//           (!showSubject && makingProgressGrade === "3") ||
//           (!showSubject && makingProgressGrade === "4")) && (
//           <SubjectButton isGrade2To4 onClick={handleClick}>
//             Show making progress
//           </SubjectButton>
//         )}

//         {!showSubject && makingProgressGrade === "5" && (
//           <SubjectButton isGrade5 onClick={handleClick}>
//             Show making progress
//           </SubjectButton>
//         )}

//         {showSubject && (
//           <>
//             <SubjectButton isHide onClick={handleClick}>
//               Hide making progress
//             </SubjectButton>

//             <SubjectsInputsDiv>
//               <h2>Making Progress:</h2>

//               <StarsDiv>
//                 {makingProgressGrade === "1" && <OneStar />}
//                 {makingProgressGrade === "2" && <TwoStars />}
//                 {makingProgressGrade === "3" && <ThreeStars />}
//                 {makingProgressGrade === "4" && <FourStars />}
//                 {makingProgressGrade === "5" && <FiveStars />}
//               </StarsDiv>

//               <SliderDiv>
//                 <CurrentGradingInfo />
//                 <input
//                   className="slider"
//                   id={id}
//                   type="range"
//                   name="makingProgressGrade"
//                   min="1"
//                   max="5"
//                   defaultValue={makingProgressGrade}
//                   onChange={handleChange}
//                 />
//               </SliderDiv>

//               <label>Making Progress Notes:</label>
//               <textarea
//                 id={id}
//                 defaultValue={makingProgressNotes}
//                 type="text"
//                 name="makingProgressNotes"
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

// export default EditMakingProgressForm;
