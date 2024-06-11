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

//Reverse(str): Reverse a string
const reverse = (str) => {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return reversed;
};

/***
 * Test
 console.log(reverse("Amalitech"));
 *
*/

// isPalindrome(str): Check if a string is a palindrome
const isPalindrome = (str) => {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};
// console.log(isPalindrome('aba'));


