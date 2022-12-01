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

// const EditSatNavForm = ({ updatedEntry, handleChange }) => {
//   const { showSubject, handleClick } = useShowSubject();
//   const { id, satGrade, satNotes } = updatedEntry;
//   return (
//     <AnimatedForm>
//       <Hr />

//       <SubjectsDiv>
//         {!showSubject && satGrade === "1" && (
//           <SubjectButton isGrade1 onClick={handleClick}>
//             Show Sat-Nav
//           </SubjectButton>
//         )}

//         {((!showSubject && satGrade === "2") ||
//           (!showSubject && satGrade === "3") ||
//           (!showSubject && satGrade === "4")) && (
//           <SubjectButton isGrade2To4 onClick={handleClick}>
//             Show Sat-Nav
//           </SubjectButton>
//         )}

//         {!showSubject && satGrade === "5" && (
//           <SubjectButton isGrade5 onClick={handleClick}>
//             Show Sat-Nav
//           </SubjectButton>
//         )}

//         {showSubject && (
//           <>
//             <SubjectButton isHide onClick={handleClick}>
//               Hide Sat-Nav
//             </SubjectButton>

//             <SubjectsInputsDiv>
//               <h2>Sat-Nav:</h2>

//               <StarsDiv>
//                 {satGrade === "1" && <OneStar />}
//                 {satGrade === "2" && <TwoStars />}
//                 {satGrade === "3" && <ThreeStars />}
//                 {satGrade === "4" && <FourStars />}
//                 {satGrade === "5" && <FiveStars />}
//               </StarsDiv>

//               <SliderDiv>
//                 <CurrentGradingInfo />
//                 <input
//                   className="slider"
//                   id={id}
//                   type="range"
//                   name="satGrade"
//                   min="1"
//                   max="5"
//                   defaultValue={satGrade}
//                   onChange={handleChange}
//                 />
//               </SliderDiv>

//               <label>Sat-Nav Notes:</label>
//               <textarea
//                 id={id}
//                 defaultValue={satNotes}
//                 type="text"
//                 name="satNotes"
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

// export default EditSatNavForm;
