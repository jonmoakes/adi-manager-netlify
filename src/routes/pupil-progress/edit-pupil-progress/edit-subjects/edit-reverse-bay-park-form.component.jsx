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

// const EditReverseBayParkForm = ({ updatedEntry, handleChange }) => {
//   const { showSubject, handleClick } = useShowSubject();
//   const { id, reverseBayGrade, reverseBayNotes } = updatedEntry;

//   return (
//     <AnimatedForm>
//       <Hr />

//       <SubjectsDiv>
//         {!showSubject && reverseBayGrade === "1" && (
//           <SubjectButton isGrade1 onClick={handleClick}>
//             Show Reverse Bay Park
//           </SubjectButton>
//         )}

//         {((!showSubject && reverseBayGrade === "2") ||
//           (!showSubject && reverseBayGrade === "3") ||
//           (!showSubject && reverseBayGrade === "4")) && (
//           <SubjectButton isGrade2To4 onClick={handleClick}>
//             Show Reverse Bay Park
//           </SubjectButton>
//         )}

//         {!showSubject && reverseBayGrade === "5" && (
//           <SubjectButton isGrade5 onClick={handleClick}>
//             Show Reverse Bay Park
//           </SubjectButton>
//         )}

//         {showSubject && (
//           <>
//             <SubjectButton isHide onClick={handleClick}>
//               Hide Reverse Bay Park
//             </SubjectButton>

//             <SubjectsInputsDiv>
//               <h2>Reverse Bay Park:</h2>

//               <StarsDiv>
//                 {reverseBayGrade === "1" && <OneStar />}
//                 {reverseBayGrade === "2" && <TwoStars />}
//                 {reverseBayGrade === "3" && <ThreeStars />}
//                 {reverseBayGrade === "4" && <FourStars />}
//                 {reverseBayGrade === "5" && <FiveStars />}
//               </StarsDiv>

//               <SliderDiv>
//                 <CurrentGradingInfo />
//                 <input
//                   className="slider"
//                   id={id}
//                   type="range"
//                   name="reverseBayGrade"
//                   min="1"
//                   max="5"
//                   defaultValue={reverseBayGrade}
//                   onChange={handleChange}
//                 />
//               </SliderDiv>

//               <label>Reverse Bay Park Notes:</label>
//               <textarea
//                 id={id}
//                 defaultValue={reverseBayNotes}
//                 type="text"
//                 name="reverseBayNotes"
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

// export default EditReverseBayParkForm;
