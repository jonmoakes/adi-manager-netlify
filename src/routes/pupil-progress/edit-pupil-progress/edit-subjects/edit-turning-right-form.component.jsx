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

// const EditTurningRightForm = ({ updatedEntry, handleChange }) => {
//   const { showSubject, handleClick } = useShowSubject();
//   const { id, turningRightGrade, turningRightNotes } = updatedEntry;
//   return (
//     <AnimatedForm>
//       <Hr />
//       <SubjectsDiv>
//         {!showSubject && turningRightGrade === "1" && (
//           <SubjectButton isGrade1 onClick={handleClick}>
//             Show Junctions - Right
//           </SubjectButton>
//         )}

//         {((!showSubject && turningRightGrade === "2") ||
//           (!showSubject && turningRightGrade === "3") ||
//           (!showSubject && turningRightGrade === "4")) && (
//           <SubjectButton isGrade2To4 onClick={handleClick}>
//             Show Junctions - Right
//           </SubjectButton>
//         )}

//         {!showSubject && turningRightGrade === "5" && (
//           <SubjectButton isGrade5 onClick={handleClick}>
//             Show Junctions - Right
//           </SubjectButton>
//         )}

//         {showSubject && (
//           <>
//             <SubjectButton isHide onClick={handleClick}>
//               Hide Junctions - Right
//             </SubjectButton>

//             <SubjectsInputsDiv>
//               <h2>Junctions - Turning Right:</h2>

//               <StarsDiv>
//                 {turningRightGrade === "1" && <OneStar />}
//                 {turningRightGrade === "2" && <TwoStars />}
//                 {turningRightGrade === "3" && <ThreeStars />}
//                 {turningRightGrade === "4" && <FourStars />}
//                 {turningRightGrade === "5" && <FiveStars />}
//               </StarsDiv>

//               <SliderDiv>
//                 <CurrentGradingInfo />
//                 <input
//                   className="slider"
//                   id={id}
//                   type="range"
//                   name="turningRightGrade"
//                   min="1"
//                   max="5"
//                   defaultValue={turningRightGrade}
//                   onChange={handleChange}
//                 />
//               </SliderDiv>

//               <label>Junctions - Turning Right Notes:</label>
//               <textarea
//                 id={id}
//                 defaultValue={turningRightNotes}
//                 type="text"
//                 name="turningRightNotes"
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

// export default EditTurningRightForm;
