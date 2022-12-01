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

// const EditCrossroadsForm = ({ updatedEntry, handleChange }) => {
//   const { showSubject, handleClick } = useShowSubject();
//   const { id, crossroadsGrade, crossroadsNotes } = updatedEntry;
//   return (
//     <AnimatedForm>
//       <Hr />

//       <SubjectsDiv>
//         {!showSubject && crossroadsGrade === "1" && (
//           <SubjectButton isGrade1 onClick={handleClick}>
//             Show Junctions - crossroads
//           </SubjectButton>
//         )}

//         {((!showSubject && crossroadsGrade === "2") ||
//           (!showSubject && crossroadsGrade === "3") ||
//           (!showSubject && crossroadsGrade === "4")) && (
//           <SubjectButton isGrade2To4 onClick={handleClick}>
//             Show Junctions - crossroads
//           </SubjectButton>
//         )}

//         {!showSubject && crossroadsGrade === "5" && (
//           <SubjectButton isGrade5 onClick={handleClick}>
//             Show Junctions - crossroads
//           </SubjectButton>
//         )}

//         {showSubject && (
//           <>
//             <SubjectButton isHide onClick={handleClick}>
//               Hide Junctions - crossroads
//             </SubjectButton>

//             <SubjectsInputsDiv>
//               <h2>Junctions - Crossroads:</h2>

//               <StarsDiv>
//                 {crossroadsGrade === "1" && <OneStar />}
//                 {crossroadsGrade === "2" && <TwoStars />}
//                 {crossroadsGrade === "3" && <ThreeStars />}
//                 {crossroadsGrade === "4" && <FourStars />}
//                 {crossroadsGrade === "5" && <FiveStars />}
//               </StarsDiv>

//               <SliderDiv>
//                 <CurrentGradingInfo />
//                 <input
//                   className="slider"
//                   id={id}
//                   type="range"
//                   name="crossroadsGrade"
//                   min="1"
//                   max="5"
//                   defaultValue={crossroadsGrade}
//                   onChange={handleChange}
//                 />
//               </SliderDiv>

//               <label>Junctions - Crossroads Notes:</label>
//               <textarea
//                 id={id}
//                 defaultValue={crossroadsNotes}
//                 type="text"
//                 name="crossroadsNotes"
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

// export default EditCrossroadsForm;
