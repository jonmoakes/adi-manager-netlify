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

// const EditDualCarriagewaysForm = ({ updatedEntry, handleChange }) => {
//   const { showSubject, handleClick } = useShowSubject();
//   const { id, dcGrade, dcNotes } = updatedEntry;

//   return (
//     <AnimatedForm>
//       <Hr />

//       <SubjectsDiv>
//         {!showSubject && dcGrade === "1" && (
//           <SubjectButton isGrade1 onClick={handleClick}>
//             Show Dual Carriageways
//           </SubjectButton>
//         )}

//         {((!showSubject && dcGrade === "2") ||
//           (!showSubject && dcGrade === "3") ||
//           (!showSubject && dcGrade === "4")) && (
//           <SubjectButton isGrade2To4 onClick={handleClick}>
//             Show Dual Carriageways
//           </SubjectButton>
//         )}

//         {!showSubject && dcGrade === "5" && (
//           <SubjectButton isGrade5 onClick={handleClick}>
//             Show Dual Carriageways
//           </SubjectButton>
//         )}

//         {showSubject && (
//           <>
//             <SubjectButton isHide onClick={handleClick}>
//               Hide Dual Carriageways
//             </SubjectButton>

//             <SubjectsInputsDiv>
//               <h2>Dual Carriageways:</h2>

//               <StarsDiv>
//                 {dcGrade === "1" && <OneStar />}
//                 {dcGrade === "2" && <TwoStars />}
//                 {dcGrade === "3" && <ThreeStars />}
//                 {dcGrade === "4" && <FourStars />}
//                 {dcGrade === "5" && <FiveStars />}
//               </StarsDiv>

//               <SliderDiv>
//                 <CurrentGradingInfo />
//                 <input
//                   className="slider"
//                   id={id}
//                   type="range"
//                   name="dcGrade"
//                   min="1"
//                   max="5"
//                   defaultValue={dcGrade}
//                   onChange={handleChange}
//                 />
//               </SliderDiv>

//               <label>Dual Carriageways Notes:</label>
//               <textarea
//                 id={id}
//                 defaultValue={dcNotes}
//                 type="text"
//                 name="dcNotes"
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

// export default EditDualCarriagewaysForm;
