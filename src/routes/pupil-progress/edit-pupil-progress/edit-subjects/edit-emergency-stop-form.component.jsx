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

// const EditEmergencyStopForm = ({ updatedEntry, handleChange }) => {
//   const { showSubject, handleClick } = useShowSubject();
//   const { id, stopGrade, stopNotes } = updatedEntry;

//   return (
//     <AnimatedForm>
//       <Hr />

//       <SubjectsDiv>
//         {!showSubject && stopGrade === "1" && (
//           <SubjectButton isGrade1 onClick={handleClick}>
//             Show Emergency Stop
//           </SubjectButton>
//         )}

//         {((!showSubject && stopGrade === "2") ||
//           (!showSubject && stopGrade === "3") ||
//           (!showSubject && stopGrade === "4")) && (
//           <SubjectButton isGrade2To4 onClick={handleClick}>
//             Show Emergency Stop
//           </SubjectButton>
//         )}

//         {!showSubject && stopGrade === "5" && (
//           <SubjectButton isGrade5 onClick={handleClick}>
//             Show Emergency Stop
//           </SubjectButton>
//         )}

//         {showSubject && (
//           <>
//             <SubjectButton isHide onClick={handleClick}>
//               Hide Emergency Stop
//             </SubjectButton>

//             <SubjectsInputsDiv>
//               <h2>Emergency Stop:</h2>

//               <StarsDiv>
//                 {stopGrade === "1" && <OneStar />}
//                 {stopGrade === "2" && <TwoStars />}
//                 {stopGrade === "3" && <ThreeStars />}
//                 {stopGrade === "4" && <FourStars />}
//                 {stopGrade === "5" && <FiveStars />}
//               </StarsDiv>

//               <SliderDiv>
//                 <CurrentGradingInfo />
//                 <input
//                   className="slider"
//                   id={id}
//                   type="range"
//                   name="stopGrade"
//                   min="1"
//                   max="5"
//                   defaultValue={stopGrade}
//                   onChange={handleChange}
//                 />
//               </SliderDiv>

//               <label>Emergency Stop Notes:</label>
//               <textarea
//                 id={id}
//                 defaultValue={stopNotes}
//                 type="text"
//                 name="stopNotes"
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

// export default EditEmergencyStopForm;
