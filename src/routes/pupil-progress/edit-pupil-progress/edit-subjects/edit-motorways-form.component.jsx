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

// const EditMotorwaysForm = ({ updatedEntry, handleChange }) => {
//   const { showSubject, handleClick } = useShowSubject();
//   const { id, mwaysGrade, mwaysNotes } = updatedEntry;

//   return (
//     <AnimatedForm>
//       <Hr />
//       <SubjectsDiv>
//         {!showSubject && mwaysGrade === "1" && (
//           <SubjectButton isGrade1 onClick={handleClick}>
//             Show Motorways
//           </SubjectButton>
//         )}

//         {((!showSubject && mwaysGrade === "2") ||
//           (!showSubject && mwaysGrade === "3") ||
//           (!showSubject && mwaysGrade === "4")) && (
//           <SubjectButton isGrade2To4 onClick={handleClick}>
//             Show Motorways
//           </SubjectButton>
//         )}

//         {!showSubject && mwaysGrade === "5" && (
//           <SubjectButton isGrade5 onClick={handleClick}>
//             Show Motorways
//           </SubjectButton>
//         )}

//         {showSubject && (
//           <>
//             <SubjectButton isHide onClick={handleClick}>
//               Hide Motorways
//             </SubjectButton>

//             <SubjectsInputsDiv>
//               <h2>Motorways:</h2>

//               <StarsDiv>
//                 {mwaysGrade === "1" && <OneStar />}
//                 {mwaysGrade === "2" && <TwoStars />}
//                 {mwaysGrade === "3" && <ThreeStars />}
//                 {mwaysGrade === "4" && <FourStars />}
//                 {mwaysGrade === "5" && <FiveStars />}
//               </StarsDiv>

//               <SliderDiv>
//                 <CurrentGradingInfo />
//                 <input
//                   className="slider"
//                   id={id}
//                   type="range"
//                   name="mwaysGrade"
//                   min="1"
//                   max="5"
//                   defaultValue={mwaysGrade}
//                   onChange={handleChange}
//                 />
//               </SliderDiv>

//               <label>Motorways Notes:</label>
//               <textarea
//                 id={id}
//                 defaultValue={mwaysNotes}
//                 type="text"
//                 name="mwaysNotes"
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

// export default EditMotorwaysForm;
