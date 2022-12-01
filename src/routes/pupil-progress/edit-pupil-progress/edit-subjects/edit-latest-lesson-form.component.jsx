// import useShowSubject from "../../../../custom-hooks/what-to-render-logic/use-show-subject";

// import SubjectButton from "../../../../components/subject-button/subject-button.component";
// import OneStar from "../../add-pupil-progress-page/stars/one-star.component";
// import TwoStars from "../../add-pupil-progress-page/stars/two-stars.component";
// import ThreeStars from "../../add-pupil-progress-page/stars/three-stars.component";
// import FourStars from "../../add-pupil-progress-page/stars/four-stars.component";
// import FiveStars from "../../add-pupil-progress-page/stars/five-stars.component";
// import CurrentGradingInfo from "../../add-pupil-progress-page/current-grading-info.component";
// import EmailEntryButtons from "../../../../components/email-entry-buttons/email-entry-buttons.component";

// import {
//   SubjectsDiv,
//   SubjectsInputsDiv,
//   StarsDiv,
//   SliderDiv,
//   AnimatedForm,
// } from "../../pupil-progress.styles";

// import { Required } from "../../../../components/style-templates/form/form.styles";

// const EditLatestLessonForm = ({
//   entry,
//   updatedEntry,
//   handleChange,
//   formattedLatestLessonDate,
// }) => {
//   const { showSubject, handleClick } = useShowSubject();
//   const {
//     id,
//     name,
//     latestLessonDate,
//     latestLessonGrade,
//     latestLessonPerformanceSummary,
//   } = updatedEntry;

//   const emailBody = `Hi,%0D%0A%0D%0AHere%20Is%20Your%20Latest%20Lesson%20Performance%20Summary.%0D%0A%0D%0APupil%20Name:%0D%0A${entry.name}%0D%0A%0D%0ALatest%20Lesson%20Date:%0D%0A${formattedLatestLessonDate}%0D%0A%0D%0APerformance%20Grading ( Out Of 5 ):%0D%0A${entry.latestLessonGrade}%0D%0A%0D%0ASummary:%0D%0A${entry.latestLessonPerformanceSummary}%0D%0A%0D%0AKind%20Regards,`;

//   return (
//     <AnimatedForm>
//       <label style={{ color: "black", textShadow: "none" }}>
//         <Required>*</Required>Pupil Name:
//       </label>
//       <input
//         type="text"
//         name="name"
//         defaultValue={name}
//         onChange={handleChange}
//       />

//       <SubjectsDiv>
//         {!showSubject && latestLessonGrade === "1" && (
//           <SubjectButton isGrade1 onClick={handleClick}>
//             Show Latest Lesson Performance
//           </SubjectButton>
//         )}

//         {((!showSubject && latestLessonGrade === "2") ||
//           (!showSubject && latestLessonGrade === "3") ||
//           (!showSubject && latestLessonGrade === "4")) && (
//           <SubjectButton isGrade2To4 onClick={handleClick}>
//             Show Latest Lesson Performance
//           </SubjectButton>
//         )}

//         {!showSubject && latestLessonGrade === "5" && (
//           <SubjectButton isGrade5 onClick={handleClick}>
//             Show Latest Lesson Performance
//           </SubjectButton>
//         )}

//         {showSubject && (
//           <>
//             <SubjectButton isHide onClick={handleClick}>
//               Hide Latest Lesson Performance
//             </SubjectButton>

//             <SubjectsInputsDiv>
//               <label className="lessonDate">
//                 Latest Lesson Performance Date:
//               </label>

//               <input
//                 id={id}
//                 className="date-picker lessonDate"
//                 type="date"
//                 name="latestLessonDate"
//                 defaultValue={latestLessonDate}
//                 onChange={handleChange}
//               />

//               <StarsDiv>
//                 {latestLessonGrade === "1" && <OneStar />}
//                 {latestLessonGrade === "2" && <TwoStars />}
//                 {latestLessonGrade === "3" && <ThreeStars />}
//                 {latestLessonGrade === "4" && <FourStars />}
//                 {latestLessonGrade === "5" && <FiveStars />}
//               </StarsDiv>

//               <SliderDiv>
//                 <CurrentGradingInfo />
//                 <input
//                   id={id}
//                   className="slider"
//                   type="range"
//                   name="latestLessonGrade"
//                   min="1"
//                   max="5"
//                   value={latestLessonGrade}
//                   onChange={handleChange}
//                 />
//               </SliderDiv>

//               <label>Latest Lesson Performance Summary:</label>
//               <textarea
//                 id={id}
//                 type="text"
//                 name="latestLessonPerformanceSummary"
//                 onChange={handleChange}
//                 defaultValue={latestLessonPerformanceSummary}
//               />
//               <EmailEntryButtons entry={entry} emailBody={emailBody} />
//             </SubjectsInputsDiv>
//           </>
//         )}
//       </SubjectsDiv>
//     </AnimatedForm>
//   );
// };

// export default EditLatestLessonForm;
