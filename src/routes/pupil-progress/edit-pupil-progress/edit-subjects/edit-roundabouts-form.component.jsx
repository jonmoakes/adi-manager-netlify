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

// const EditRoundaboutsForm = ({ updatedEntry, handleChange }) => {
//   const { showSubject, handleClick } = useShowSubject();
//   const { id, roundaboutsGrade, roundaboutsNotes } = updatedEntry;

//   return (
//     <AnimatedForm>
//       <Hr />

//       <SubjectsDiv>
//         {!showSubject && roundaboutsGrade === "1" && (
//           <SubjectButton isGrade1 onClick={handleClick}>
//             Show Roundabouts
//           </SubjectButton>
//         )}

//         {((!showSubject && roundaboutsGrade === "2") ||
//           (!showSubject && roundaboutsGrade === "3") ||
//           (!showSubject && roundaboutsGrade === "4")) && (
//           <SubjectButton isGrade2To4 onClick={handleClick}>
//             Show roundabouts
//           </SubjectButton>
//         )}

//         {!showSubject && roundaboutsGrade === "5" && (
//           <SubjectButton isGrade5 onClick={handleClick}>
//             Show roundabouts
//           </SubjectButton>
//         )}

//         {showSubject && (
//           <>
//             <SubjectButton isHide onClick={handleClick}>
//               Hide roundabouts
//             </SubjectButton>

//             <SubjectsInputsDiv>
//               <h2>Roundabouts:</h2>

//               <StarsDiv>
//                 {roundaboutsGrade === "1" && <OneStar />}
//                 {roundaboutsGrade === "2" && <TwoStars />}
//                 {roundaboutsGrade === "3" && <ThreeStars />}
//                 {roundaboutsGrade === "4" && <FourStars />}
//                 {roundaboutsGrade === "5" && <FiveStars />}
//               </StarsDiv>

//               <SliderDiv>
//                 <CurrentGradingInfo />
//                 <input
//                   className="slider"
//                   id={id}
//                   type="range"
//                   name="roundaboutsGrade"
//                   min="1"
//                   max="5"
//                   defaultValue={roundaboutsGrade}
//                   onChange={handleChange}
//                 />
//               </SliderDiv>

//               <label>Roundabouts Notes:</label>
//               <textarea
//                 id={id}
//                 defaultValue={roundaboutsNotes}
//                 type="text"
//                 name="roundaboutsNotes"
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

// export default EditRoundaboutsForm;
