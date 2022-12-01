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

// const EditIndependentDrivingForm = ({ updatedEntry, handleChange }) => {
//   const { showSubject, handleClick } = useShowSubject();
//   const { id, indyGrade, indyNotes } = updatedEntry;
//   return (
//     <AnimatedForm>
//       <Hr />

//       <SubjectsDiv>
//         {!showSubject && indyGrade === "1" && (
//           <SubjectButton isGrade1 onClick={handleClick}>
//             Show Independent Driving
//           </SubjectButton>
//         )}

//         {((!showSubject && indyGrade === "2") ||
//           (!showSubject && indyGrade === "3") ||
//           (!showSubject && indyGrade === "4")) && (
//           <SubjectButton isGrade2To4 onClick={handleClick}>
//             Show Independent Driving
//           </SubjectButton>
//         )}

//         {!showSubject && indyGrade === "5" && (
//           <SubjectButton isGrade5 onClick={handleClick}>
//             Show Independent Driving
//           </SubjectButton>
//         )}

//         {showSubject && (
//           <>
//             <SubjectButton isHide onClick={handleClick}>
//               Hide Independent Driving
//             </SubjectButton>

//             <SubjectsInputsDiv>
//               <h2>Independent Driving:</h2>

//               <StarsDiv>
//                 {indyGrade === "1" && <OneStar />}
//                 {indyGrade === "2" && <TwoStars />}
//                 {indyGrade === "3" && <ThreeStars />}
//                 {indyGrade === "4" && <FourStars />}
//                 {indyGrade === "5" && <FiveStars />}
//               </StarsDiv>

//               <SliderDiv>
//                 <CurrentGradingInfo />
//                 <input
//                   className="slider"
//                   id={id}
//                   type="range"
//                   name="indyGrade"
//                   min="1"
//                   max="5"
//                   defaultValue={indyGrade}
//                   onChange={handleChange}
//                 />
//               </SliderDiv>

//               <label>Independent Driving Notes:</label>
//               <textarea
//                 id={id}
//                 defaultValue={indyNotes}
//                 type="text"
//                 name="indyNotes"
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

// export default EditIndependentDrivingForm;
