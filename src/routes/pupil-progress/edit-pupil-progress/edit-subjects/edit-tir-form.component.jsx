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

// const EditTirForm = ({ updatedEntry, handleChange }) => {
//   const { showSubject, handleClick } = useShowSubject();
//   const { id, tirGrade, tirNotes } = updatedEntry;
//   return (
//     <AnimatedForm>
//       <Hr />

//       <SubjectsDiv>
//         {!showSubject && tirGrade === "1" && (
//           <SubjectButton isGrade1 onClick={handleClick}>
//             Show Turn In The Road
//           </SubjectButton>
//         )}

//         {((!showSubject && tirGrade === "2") ||
//           (!showSubject && tirGrade === "3") ||
//           (!showSubject && tirGrade === "4")) && (
//           <SubjectButton isGrade2To4 onClick={handleClick}>
//             Show Turn In The Road
//           </SubjectButton>
//         )}

//         {!showSubject && tirGrade === "5" && (
//           <SubjectButton isGrade5 onClick={handleClick}>
//             Show Turn In The Road
//           </SubjectButton>
//         )}

//         {showSubject && (
//           <>
//             <SubjectButton isHide onClick={handleClick}>
//               Hide Turn In The Road
//             </SubjectButton>

//             <SubjectsInputsDiv>
//               <h2>Turn In The Road:</h2>

//               <StarsDiv>
//                 {tirGrade === "1" && <OneStar />}
//                 {tirGrade === "2" && <TwoStars />}
//                 {tirGrade === "3" && <ThreeStars />}
//                 {tirGrade === "4" && <FourStars />}
//                 {tirGrade === "5" && <FiveStars />}
//               </StarsDiv>

//               <SliderDiv>
//                 <CurrentGradingInfo />
//                 <input
//                   className="slider"
//                   id={id}
//                   type="range"
//                   name="tirGrade"
//                   min="1"
//                   max="5"
//                   defaultValue={tirGrade}
//                   onChange={handleChange}
//                 />
//               </SliderDiv>

//               <label>Turn In The Road Notes:</label>
//               <textarea
//                 id={id}
//                 defaultValue={tirNotes}
//                 type="text"
//                 name="tirNotes"
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

// export default EditTirForm;
