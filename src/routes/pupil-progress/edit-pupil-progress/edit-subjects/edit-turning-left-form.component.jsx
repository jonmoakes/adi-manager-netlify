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

// const EditTurningLeftForm = ({ updatedEntry, handleChange }) => {
//   const { showSubject, handleClick } = useShowSubject();
//   const { id, turningLeftGrade, turningLeftNotes } = updatedEntry;

//   return (
//     <AnimatedForm>
//       <Hr />
//       <SubjectsDiv>
//         {!showSubject && turningLeftGrade === "1" && (
//           <SubjectButton isGrade1 onClick={handleClick}>
//             Show Junctions - Left
//           </SubjectButton>
//         )}

//         {((!showSubject && turningLeftGrade === "2") ||
//           (!showSubject && turningLeftGrade === "3") ||
//           (!showSubject && turningLeftGrade === "4")) && (
//           <SubjectButton isGrade2To4 onClick={handleClick}>
//             Show Junctions - Left
//           </SubjectButton>
//         )}

//         {!showSubject && turningLeftGrade === "5" && (
//           <SubjectButton isGrade5 onClick={handleClick}>
//             Show Junctions - Left
//           </SubjectButton>
//         )}

//         {showSubject && (
//           <>
//             <SubjectButton isHide onClick={handleClick}>
//               Hide Junctions - Left
//             </SubjectButton>

//             <SubjectsInputsDiv>
//               <h2>Junctions - Turning Left:</h2>

//               <StarsDiv>
//                 {turningLeftGrade === "1" && <OneStar />}
//                 {turningLeftGrade === "2" && <TwoStars />}
//                 {turningLeftGrade === "3" && <ThreeStars />}
//                 {turningLeftGrade === "4" && <FourStars />}
//                 {turningLeftGrade === "5" && <FiveStars />}
//               </StarsDiv>

//               <SliderDiv>
//                 <CurrentGradingInfo />
//                 <input
//                   className="slider"
//                   id={id}
//                   type="range"
//                   name="turningLeftGrade"
//                   min="1"
//                   max="5"
//                   defaultValue={turningLeftGrade}
//                   onChange={handleChange}
//                 />
//               </SliderDiv>

//               <label>Junctions - Turning Left Notes:</label>
//               <textarea
//                 id={id}
//                 defaultValue={turningLeftNotes}
//                 type="text"
//                 name="turningLeftNotes"
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

// export default EditTurningLeftForm;
