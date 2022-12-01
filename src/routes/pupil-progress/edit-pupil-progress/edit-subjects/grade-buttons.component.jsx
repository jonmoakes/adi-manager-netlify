import SubjectButton from "../../../../components/subject-button/subject-button.component";

import { isGradeOne, isGradeTwoToFour, isGradeFive } from "./grade-check";

const GradeButtons = ({
  subjectGrade,
  showSubject,
  handleClick,
  buttonText,
}) => {
  return (
    <>
      {isGradeOne(showSubject, subjectGrade) && (
        <SubjectButton isGrade1 onClick={handleClick}>
          Show {buttonText}
        </SubjectButton>
      )}

      {isGradeTwoToFour(showSubject, subjectGrade) && (
        <SubjectButton isGrade2To4 onClick={handleClick}>
          Show {buttonText}
        </SubjectButton>
      )}

      {isGradeFive(showSubject, subjectGrade) && (
        <SubjectButton isGrade5 onClick={handleClick}>
          Show {buttonText}
        </SubjectButton>
      )}
    </>
  );
};

export default GradeButtons;
