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

// const EditParallelParkForm = ({ updatedEntry, handleChange }) => {
//   const { showSubject, handleClick } = useShowSubject();
//   const { id, pParkGrade, pParkNotes } = updatedEntry;
//   return (
//     <AnimatedForm>
//       <Hr />

//       <SubjectsDiv>
//         {!showSubject && pParkGrade === "1" && (
//           <SubjectButton isGrade1 onClick={handleClick}>
//             Show Parallel Park
//           </SubjectButton>
//         )}

//         {((!showSubject && pParkGrade === "2") ||
//           (!showSubject && pParkGrade === "3") ||
//           (!showSubject && pParkGrade === "4")) && (
//           <SubjectButton isGrade2To4 onClick={handleClick}>
//             Show Parallel Park
//           </SubjectButton>
//         )}

//         {!showSubject && pParkGrade === "5" && (
//           <SubjectButton isGrade5 onClick={handleClick}>
//             Show Parallel Park
//           </SubjectButton>
//         )}

//         {showSubject && (
//           <>
//             <SubjectButton isHide onClick={handleClick}>
//               Hide Parallel Park
//             </SubjectButton>

//             <SubjectsInputsDiv>
//               <h2>Parallel Park:</h2>

//               <StarsDiv>
//                 {pParkGrade === "1" && <OneStar />}
//                 {pParkGrade === "2" && <TwoStars />}
//                 {pParkGrade === "3" && <ThreeStars />}
//                 {pParkGrade === "4" && <FourStars />}
//                 {pParkGrade === "5" && <FiveStars />}
//               </StarsDiv>

//               <SliderDiv>
//                 <CurrentGradingInfo />
//                 <input
//                   className="slider"
//                   id={id}
//                   type="range"
//                   name="pParkGrade"
//                   min="1"
//                   max="5"
//                   defaultValue={pParkGrade}
//                   onChange={handleChange}
//                 />
//               </SliderDiv>

//               <label>Parallel Park Notes:</label>
//               <textarea
//                 id={id}
//                 defaultValue={pParkNotes}
//                 type="text"
//                 name="pParkNotes"
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

// export default EditParallelParkForm;
