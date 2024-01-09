export default function cleanSet(set, startString) {
  // Filter the set values that start with the specified string
  const filteredValues = Array.from(set).filter((value) => value.startsWith(startString));
  // Append the remaining part of each value to the result string
  const resultString = filteredValues.map((value) => value.slice(startString.length)).join('-');
  return resultString;
}
