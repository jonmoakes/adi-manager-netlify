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

// const EditOneWayForm = ({ updatedEntry, handleChange }) => {
//   const { showSubject, handleClick } = useShowSubject();
//   const { id, oneWayGrade, oneWayNotes } = updatedEntry;

//   return (
//     <AnimatedForm>
//       <Hr />

//       <SubjectsDiv>
//         {!showSubject && oneWayGrade === "1" && (
//           <SubjectButton isGrade1 onClick={handleClick}>
//             Show One Way Streets
//           </SubjectButton>
//         )}

//         {((!showSubject && oneWayGrade === "2") ||
//           (!showSubject && oneWayGrade === "3") ||
//           (!showSubject && oneWayGrade === "4")) && (
//           <SubjectButton isGrade2To4 onClick={handleClick}>
//             Show One Way Streets
//           </SubjectButton>
//         )}

//         {!showSubject && oneWayGrade === "5" && (
//           <SubjectButton isGrade5 onClick={handleClick}>
//             Show One Way Streets
//           </SubjectButton>
//         )}

//         {showSubject && (
//           <>
//             <SubjectButton isHide onClick={handleClick}>
//               Hide One Way Streets
//             </SubjectButton>

//             <SubjectsInputsDiv>
//               <h2>One Way Streets:</h2>

//               <StarsDiv>
//                 {oneWayGrade === "1" && <OneStar />}
//                 {oneWayGrade === "2" && <TwoStars />}
//                 {oneWayGrade === "3" && <ThreeStars />}
//                 {oneWayGrade === "4" && <FourStars />}
//                 {oneWayGrade === "5" && <FiveStars />}
//               </StarsDiv>

//               <SliderDiv>
//                 <CurrentGradingInfo />
//                 <input
//                   className="slider"
//                   id={id}
//                   type="range"
//                   name="oneWayGrade"
//                   min="1"
//                   max="5"
//                   defaultValue={oneWayGrade}
//                   onChange={handleChange}
//                 />
//               </SliderDiv>

//               <label>One Way Streets Notes:</label>
//               <textarea
//                 id={id}
//                 defaultValue={oneWayNotes}
//                 type="text"
//                 name="oneWayNotes"
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

// export default EditOneWayForm;
