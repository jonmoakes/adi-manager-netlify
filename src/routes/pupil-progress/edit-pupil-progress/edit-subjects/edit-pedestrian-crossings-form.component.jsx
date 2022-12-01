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

// const EditPedestrianCrossingsForm = ({ updatedEntry, handleChange }) => {
//   const { showSubject, handleClick } = useShowSubject();
//   const { id, pedXGrade, pedXNotes } = updatedEntry;
//   return (
//     <AnimatedForm>
//       <Hr />

//       <SubjectsDiv>
//         {!showSubject && pedXGrade === "1" && (
//           <SubjectButton isGrade1 onClick={handleClick}>
//             Show pedestrian crossings
//           </SubjectButton>
//         )}

//         {((!showSubject && pedXGrade === "2") ||
//           (!showSubject && pedXGrade === "3") ||
//           (!showSubject && pedXGrade === "4")) && (
//           <SubjectButton isGrade2To4 onClick={handleClick}>
//             Show pedestrian crossings
//           </SubjectButton>
//         )}

//         {!showSubject && pedXGrade === "5" && (
//           <SubjectButton isGrade5 onClick={handleClick}>
//             Show pedestrian crossings
//           </SubjectButton>
//         )}

//         {showSubject && (
//           <>
//             <SubjectButton isHide onClick={handleClick}>
//               Hide pedestrian crossings
//             </SubjectButton>

//             <SubjectsInputsDiv>
//               <h2>Pedestrian Crossings:</h2>

//               <StarsDiv>
//                 {pedXGrade === "1" && <OneStar />}
//                 {pedXGrade === "2" && <TwoStars />}
//                 {pedXGrade === "3" && <ThreeStars />}
//                 {pedXGrade === "4" && <FourStars />}
//                 {pedXGrade === "5" && <FiveStars />}
//               </StarsDiv>

//               <SliderDiv>
//                 <CurrentGradingInfo />
//                 <input
//                   className="slider"
//                   id={id}
//                   type="range"
//                   name="pedXGrade"
//                   min="1"
//                   max="5"
//                   defaultValue={pedXGrade}
//                   onChange={handleChange}
//                 />
//               </SliderDiv>

//               <label>Pedestrian Crossings Notes:</label>
//               <textarea
//                 id={id}
//                 defaultValue={pedXNotes}
//                 type="text"
//                 name="pedXNotes"
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

// export default EditPedestrianCrossingsForm;
