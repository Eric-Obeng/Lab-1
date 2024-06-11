// Task 1: String Transformations
/** Capitalize(str): Capitalize the first letter of a striing */

const capitalize = (str) => {
  const newString = str.toLowerCase();
  const result = newString[0].toUpperCase() + newString.slice(1);
  return result;
};
/***
 * Test
console.log(capitalize('eric'))
console.log(capitalize('aMaliTecH'))
*/
