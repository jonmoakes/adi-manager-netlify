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

// const EditEmergingForm = ({ updatedEntry, handleChange }) => {
//   const { showSubject, handleClick } = useShowSubject();
//   const { id, emergingGrade, emergingNotes } = updatedEntry;
//   return (
//     <AnimatedForm>
//       <Hr />
//       <SubjectsDiv>
//         {!showSubject && emergingGrade === "1" && (
//           <SubjectButton isGrade1 onClick={handleClick}>
//             Show Junctions - Emerging
//           </SubjectButton>
//         )}

//         {((!showSubject && emergingGrade === "2") ||
//           (!showSubject && emergingGrade === "3") ||
//           (!showSubject && emergingGrade === "4")) && (
//           <SubjectButton isGrade2To4 onClick={handleClick}>
//             Show Junctions - Emerging
//           </SubjectButton>
//         )}

//         {!showSubject && emergingGrade === "5" && (
//           <SubjectButton isGrade5 onClick={handleClick}>
//             Show Junctions - Emerging
//           </SubjectButton>
//         )}

//         {showSubject && (
//           <>
//             <SubjectButton isHide onClick={handleClick}>
//               Hide Junctions - Emerging
//             </SubjectButton>

//             <SubjectsInputsDiv>
//               <h2>Junctions - Emerging:</h2>

//               <StarsDiv>
//                 {emergingGrade === "1" && <OneStar />}
//                 {emergingGrade === "2" && <TwoStars />}
//                 {emergingGrade === "3" && <ThreeStars />}
//                 {emergingGrade === "4" && <FourStars />}
//                 {emergingGrade === "5" && <FiveStars />}
//               </StarsDiv>

//               <SliderDiv>
//                 <CurrentGradingInfo />

//                 <input
//                   className="slider"
//                   id={id}
//                   type="range"
//                   name="emergingGrade"
//                   min="1"
//                   max="5"
//                   defaultValue={emergingGrade}
//                   onChange={handleChange}
//                 />
//               </SliderDiv>

//               <label>Junctions - Emerging Notes:</label>
//               <textarea
//                 id={id}
//                 defaultValue={emergingNotes}
//                 type="text"
//                 name="emergingNotes"
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

// export default EditEmergingForm;
