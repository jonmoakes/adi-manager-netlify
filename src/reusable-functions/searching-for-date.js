export const searchingForDate = (value) => {
  return (
    value.includes("jan") ||
    value.includes("feb") ||
    value.includes("mar") ||
    value.includes("apr") ||
    value.includes("jun") ||
    value.includes("jul") ||
    value.includes("aug") ||
    value.includes("sep") ||
    value.includes("oct") ||
    value.includes("nov") ||
    (value.includes("dec") && true)
  );
};
