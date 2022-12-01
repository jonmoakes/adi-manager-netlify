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

// const EditMiniRoundaboutsForm = ({ updatedEntry, handleChange }) => {
//   const { showSubject, handleClick } = useShowSubject();
//   const { id, miniRbGrade, miniRbNotes } = updatedEntry;
//   return (
//     <AnimatedForm>
//       <Hr />
//       <SubjectsDiv>
//         {!showSubject && miniRbGrade === "1" && (
//           <SubjectButton isGrade1 onClick={handleClick}>
//             Show mini Roundabouts
//           </SubjectButton>
//         )}

//         {((!showSubject && miniRbGrade === "2") ||
//           (!showSubject && miniRbGrade === "3") ||
//           (!showSubject && miniRbGrade === "4")) && (
//           <SubjectButton isGrade2To4 onClick={handleClick}>
//             Show mini roundabouts
//           </SubjectButton>
//         )}

//         {!showSubject && miniRbGrade === "5" && (
//           <SubjectButton isGrade5 onClick={handleClick}>
//             Show mini roundabouts
//           </SubjectButton>
//         )}

//         {showSubject && (
//           <>
//             <SubjectButton isHide onClick={handleClick}>
//               Hide mini roundabouts
//             </SubjectButton>

//             <SubjectsInputsDiv>
//               <h2>Mini Roundabouts:</h2>

//               <StarsDiv>
//                 {miniRbGrade === "1" && <OneStar />}
//                 {miniRbGrade === "2" && <TwoStars />}
//                 {miniRbGrade === "3" && <ThreeStars />}
//                 {miniRbGrade === "4" && <FourStars />}
//                 {miniRbGrade === "5" && <FiveStars />}
//               </StarsDiv>

//               <SliderDiv>
//                 <CurrentGradingInfo />
//                 <input
//                   className="slider"
//                   id={id}
//                   type="range"
//                   name="miniRbGrade"
//                   min="1"
//                   max="5"
//                   defaultValue={miniRbGrade}
//                   onChange={handleChange}
//                 />
//               </SliderDiv>

//               <label>Mini Roundabouts Notes:</label>
//               <textarea
//                 id={id}
//                 defaultValue={miniRbNotes}
//                 type="text"
//                 name="miniRbNotes"
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

// export default EditMiniRoundaboutsForm;
