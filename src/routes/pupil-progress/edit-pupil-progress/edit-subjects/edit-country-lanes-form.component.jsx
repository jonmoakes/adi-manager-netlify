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

// const EditCountryLanesForm = ({ updatedEntry, handleChange }) => {
//   const { showSubject, handleClick } = useShowSubject();
//   const { id, lanesGrade, lanesNotes } = updatedEntry;

//   return (
//     <AnimatedForm>
//       <Hr />

//       <SubjectsDiv>
//         {!showSubject && lanesGrade === "1" && (
//           <SubjectButton isGrade1 onClick={handleClick}>
//             Show Country Lanes
//           </SubjectButton>
//         )}

//         {((!showSubject && lanesGrade === "2") ||
//           (!showSubject && lanesGrade === "3") ||
//           (!showSubject && lanesGrade === "4")) && (
//           <SubjectButton isGrade2To4 onClick={handleClick}>
//             Show Country Lanes
//           </SubjectButton>
//         )}

//         {!showSubject && lanesGrade === "5" && (
//           <SubjectButton isGrade5 onClick={handleClick}>
//             Show Country Lanes
//           </SubjectButton>
//         )}

//         {showSubject && (
//           <>
//             <SubjectButton isHide onClick={handleClick}>
//               Hide Country Lanes
//             </SubjectButton>

//             <SubjectsInputsDiv>
//               <h2>Country Lanes:</h2>

//               <StarsDiv>
//                 {lanesGrade === "1" && <OneStar />}
//                 {lanesGrade === "2" && <TwoStars />}
//                 {lanesGrade === "3" && <ThreeStars />}
//                 {lanesGrade === "4" && <FourStars />}
//                 {lanesGrade === "5" && <FiveStars />}
//               </StarsDiv>

//               <SliderDiv>
//                 <CurrentGradingInfo />
//                 <input
//                   className="slider"
//                   id={id}
//                   type="range"
//                   name="lanesGrade"
//                   min="1"
//                   max="5"
//                   defaultValue={lanesGrade}
//                   onChange={handleChange}
//                 />
//               </SliderDiv>

//               <label>Country Lanes Notes:</label>
//               <textarea
//                 id={id}
//                 defaultValue={lanesNotes}
//                 type="text"
//                 name="lanesNotes"
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

// export default EditCountryLanesForm;
