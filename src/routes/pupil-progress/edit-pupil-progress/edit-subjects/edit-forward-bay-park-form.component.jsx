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

// const EditForwardBayParkForm = ({ updatedEntry, handleChange }) => {
//   const { showSubject, handleClick } = useShowSubject();
//   const { id, fBayGrade, fBayNotes } = updatedEntry;
//   return (
//     <AnimatedForm>
//       <Hr />

//       <SubjectsDiv>
//         {!showSubject && fBayGrade === "1" && (
//           <SubjectButton isGrade1 onClick={handleClick}>
//             Show Forward Bay Park
//           </SubjectButton>
//         )}

//         {((!showSubject && fBayGrade === "2") ||
//           (!showSubject && fBayGrade === "3") ||
//           (!showSubject && fBayGrade === "4")) && (
//           <SubjectButton isGrade2To4 onClick={handleClick}>
//             Show Forward Bay Park
//           </SubjectButton>
//         )}

//         {!showSubject && fBayGrade === "5" && (
//           <SubjectButton isGrade5 onClick={handleClick}>
//             Show Forward Bay Park
//           </SubjectButton>
//         )}

//         {showSubject && (
//           <>
//             <SubjectButton isHide onClick={handleClick}>
//               Hide Forward Bay Park
//             </SubjectButton>

//             <SubjectsInputsDiv>
//               <h2>Forward Bay Park:</h2>

//               <StarsDiv>
//                 {fBayGrade === "1" && <OneStar />}
//                 {fBayGrade === "2" && <TwoStars />}
//                 {fBayGrade === "3" && <ThreeStars />}
//                 {fBayGrade === "4" && <FourStars />}
//                 {fBayGrade === "5" && <FiveStars />}
//               </StarsDiv>

//               <SliderDiv>
//                 <CurrentGradingInfo />
//                 <input
//                   className="slider"
//                   id={id}
//                   type="range"
//                   name="fBayGrade"
//                   min="1"
//                   max="5"
//                   defaultValue={fBayGrade}
//                   onChange={handleChange}
//                 />
//               </SliderDiv>

//               <label>Forward Bay Park Notes:</label>
//               <textarea
//                 id={id}
//                 defaultValue={fBayNotes}
//                 type="text"
//                 name="fBayNotes"
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

// export default EditForwardBayParkForm;
