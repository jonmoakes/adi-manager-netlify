export const isGradeOne = (showSubject, grade) => {
  return !showSubject && grade === "1" ? true : false;
};

export const isGradeTwoToFour = (showSubject, grade) => {
  return (
    (!showSubject && grade === "2") ||
    (!showSubject && grade === "3") ||
    (!showSubject && grade === "4" && true)
  );
};

export const isGradeFive = (showSubject, grade) => {
  return !showSubject && grade === "5" ? true : false;
};
