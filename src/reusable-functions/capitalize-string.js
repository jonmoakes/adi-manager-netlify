export const capitalizeString = (string) => {
  const splitString = string.split(" ");
  for (var i = 0; i < splitString.length; i++) {
    splitString[i] =
      splitString[i].charAt(0).toUpperCase() + splitString[i].slice(1);
  }

  return splitString.join(" ");
};
