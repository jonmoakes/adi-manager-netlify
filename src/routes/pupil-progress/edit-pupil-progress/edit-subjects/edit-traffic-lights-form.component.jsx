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

// const EditTrafficLightsForm = ({ updatedEntry, handleChange }) => {
//   const { showSubject, handleClick } = useShowSubject();
//   const { id, tlGrade, tlNotes } = updatedEntry;

//   return (
//     <AnimatedForm>
//       <Hr />

//       <SubjectsDiv>
//         {!showSubject && tlGrade === "1" && (
//           <SubjectButton isGrade1 onClick={handleClick}>
//             Show traffic lights
//           </SubjectButton>
//         )}

//         {((!showSubject && tlGrade === "2") ||
//           (!showSubject && tlGrade === "3") ||
//           (!showSubject && tlGrade === "4")) && (
//           <SubjectButton isGrade2To4 onClick={handleClick}>
//             Show traffic lights
//           </SubjectButton>
//         )}

//         {!showSubject && tlGrade === "5" && (
//           <SubjectButton isGrade5 onClick={handleClick}>
//             Show traffic lights
//           </SubjectButton>
//         )}

//         {showSubject && (
//           <>
//             <SubjectButton isHide onClick={handleClick}>
//               Hide traffic lights
//             </SubjectButton>

//             <SubjectsInputsDiv>
//               <h2>Traffic Lights:</h2>

//               <StarsDiv>
//                 {tlGrade === "1" && <OneStar />}
//                 {tlGrade === "2" && <TwoStars />}
//                 {tlGrade === "3" && <ThreeStars />}
//                 {tlGrade === "4" && <FourStars />}
//                 {tlGrade === "5" && <FiveStars />}
//               </StarsDiv>

//               <SliderDiv>
//                 <CurrentGradingInfo />
//                 <input
//                   className="slider"
//                   id={id}
//                   type="range"
//                   name="tlGrade"
//                   min="1"
//                   max="5"
//                   defaultValue={tlGrade}
//                   onChange={handleChange}
//                 />
//               </SliderDiv>

//               <label>Traffic Lights Notes:</label>
//               <textarea
//                 id={id}
//                 defaultValue={tlNotes}
//                 type="text"
//                 name="tlNotes"
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

// export default EditTrafficLightsForm;
