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

// const EditMovingOffForm = ({ updatedEntry, handleChange }) => {
//   const { showSubject, handleClick } = useShowSubject();
//   const { id, movingOffGrade, movingOffNotes } = updatedEntry;

//   return (
//     <AnimatedForm>
//       <Hr />
//       <SubjectsDiv>
//         {!showSubject && movingOffGrade === "1" && (
//           <SubjectButton isGrade1 onClick={handleClick}>
//             Show M/Off & Stopping
//           </SubjectButton>
//         )}

//         {((!showSubject && movingOffGrade === "2") ||
//           (!showSubject && movingOffGrade === "3") ||
//           (!showSubject && movingOffGrade === "4")) && (
//           <SubjectButton isGrade2To4 onClick={handleClick}>
//             Show M/Off & Stopping
//           </SubjectButton>
//         )}

//         {!showSubject && movingOffGrade === "5" && (
//           <SubjectButton isGrade5 onClick={handleClick}>
//             Show M/Off & Stopping
//           </SubjectButton>
//         )}

//         {showSubject && (
//           <>
//             <SubjectButton isHide onClick={handleClick}>
//               Hide M/Off & Stopping
//             </SubjectButton>

//             <SubjectsInputsDiv>
//               <h2>Moving Off and stopping:</h2>

//               <StarsDiv>
//                 {movingOffGrade === "1" && <OneStar />}
//                 {movingOffGrade === "2" && <TwoStars />}
//                 {movingOffGrade === "3" && <ThreeStars />}
//                 {movingOffGrade === "4" && <FourStars />}
//                 {movingOffGrade === "5" && <FiveStars />}
//               </StarsDiv>

//               <SliderDiv>
//                 <CurrentGradingInfo />
//                 <input
//                   className="slider"
//                   id={id}
//                   type="range"
//                   name="movingOffGrade"
//                   min="1"
//                   max="5"
//                   defaultValue={movingOffGrade}
//                   onChange={handleChange}
//                 />
//               </SliderDiv>

//               <label>Moving Off And Stopping Notes:</label>
//               <textarea
//                 id={id}
//                 defaultValue={movingOffNotes}
//                 type="text"
//                 name="movingOffNotes"
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

// export default EditMovingOffForm;
