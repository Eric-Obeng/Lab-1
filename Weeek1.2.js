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

// wordCount(str): Counts the number of words in a string
const wordCount = (str) => {
  let numberOfWords = 0;
  let word = false;

  for (let i = 0; i < str.length; i++) {
    //Checking for punctuations, space and special characters
    if (
      str[i] === " " ||
      str[i] === "\t" ||
      str[i] === "\n" ||
      str[i] === "\r" ||
      str[i] === "\f"
    ) {
      if (word) {
        numberOfWords++;
        word = false;
      }
    } else {
      word = true;
    }
  }

  if (word) {
    numberOfWords++;
  }

  return numberOfWords;
};

// console.log(wordCount('Welcome to Amalitech'));

/**
 * Task 2: Array Transformation
 */

// a. double(arr): Double every number in an array
const double = (arr) => {
  const double = arr.map((elem) => elem * 2);
  return double;
};
// console.log(double([2,4,6]));

// b. filterEven(arr): Filter out even numbers from an array
function filterEven(arr) {
  const even = arr.filter((num) => {
    return num % 2 === 0;
  });
  return even;
}

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12];
// console.log(filterEven(numbers));


//