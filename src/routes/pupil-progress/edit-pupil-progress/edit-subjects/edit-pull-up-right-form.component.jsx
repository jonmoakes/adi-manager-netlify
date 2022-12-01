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

// const EditPullUpRightForm = ({ updatedEntry, handleChange }) => {
//   const { showSubject, handleClick } = useShowSubject();
//   const { id, pullGrade, pullNotes } = updatedEntry;

//   return (
//     <AnimatedForm>
//       <Hr />

//       <SubjectsDiv>
//         {!showSubject && pullGrade === "1" && (
//           <SubjectButton isGrade1 onClick={handleClick}>
//             Show Pull Up On The Right
//           </SubjectButton>
//         )}

//         {((!showSubject && pullGrade === "2") ||
//           (!showSubject && pullGrade === "3") ||
//           (!showSubject && pullGrade === "4")) && (
//           <SubjectButton isGrade2To4 onClick={handleClick}>
//             Show Pull Up On The Right
//           </SubjectButton>
//         )}

//         {!showSubject && pullGrade === "5" && (
//           <SubjectButton isGrade5 onClick={handleClick}>
//             Show Pull Up On The Right
//           </SubjectButton>
//         )}

//         {showSubject && (
//           <>
//             <SubjectButton isHide onClick={handleClick}>
//               Hide Pull Up On The Right
//             </SubjectButton>

//             <SubjectsInputsDiv>
//               <h2>Pull Up On The Right:</h2>

//               <StarsDiv>
//                 {pullGrade === "1" && <OneStar />}
//                 {pullGrade === "2" && <TwoStars />}
//                 {pullGrade === "3" && <ThreeStars />}
//                 {pullGrade === "4" && <FourStars />}
//                 {pullGrade === "5" && <FiveStars />}
//               </StarsDiv>

//               <SliderDiv>
//                 <CurrentGradingInfo />
//                 <input
//                   className="slider"
//                   id={id}
//                   type="range"
//                   name="pullGrade"
//                   min="1"
//                   max="5"
//                   defaultValue={pullGrade}
//                   onChange={handleChange}
//                 />
//               </SliderDiv>

//               <label>Pull Up On The Right Notes:</label>
//               <textarea
//                 id={id}
//                 defaultValue={pullNotes}
//                 type="text"
//                 name="pullNotes"
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

// export default EditPullUpRightForm;
