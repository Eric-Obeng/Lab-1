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

// c. sum(arr): Calculates the avearge of all numbers in an array
const sum = (arr) => {
  return arr.reduce((acc, elem) => {
    return acc + elem;
  }, 0);
};
// console.log(sum([1, 2]))

// d. average(arr): Calculates the average of all numbers in an array
const average = (arr) => {
  if (arr.length === 0) return 0;

  const sum = arr.reduce((acc, elem) => acc + elem, 0);
  return sum / arr.length;
};
// console.log(average([10, 20, 30]));

/****
 * Task 3: Object Transformation
 */
// a. fullName(person)
const fullName = (person) => {
  return person["firstName"] + " " + person["lastName"];
};

/*
const person = {
  firstName: "Eric",
  lastName: "Obeng",
};

console.log(fullName(person));
*/

// b. isAdult(person): Checks if a person is 18 or older
const isAdult = (person) => {
  return person.age >= 18;
};

/*
  const person1 = {
    name: 'Eric',
    age: 20
  };

  console.log(isAdult(person1));
  */

// c. filterByAge(people, minAge): Filter an array of person object to keep only those at least minAge years old
const filterByAge = (people, minAge) => {
  return people.filter((person) => person.age >= minAge);
};

/*
const people = [
  { name: "Eric", age: 20 },
  { name: "Rhoda", age: 16 },
  { name: "Charlie", age: 25 },
  { name: "PK", age: 17 },
];

console.log(filterByAge(people, 18));
*/

/**
 * Task 4: Function Composition
 */
/* a. Use the compose(...fns) function (you can find implementations online) to
combine your functions in interesting ways. For example, create a function to
reverse and capitalize a string, or to double all the even numbers in an array.
*/

const compose = (...fns) => {
  return function (initialValue) {
    return fns.reduceRight((acc, fn) => fn(acc), initialValue);
  };
};

function reverseString(str) {
  return str.split("").reverse().join("");
}

function capitalizeString(str) {
  return str.toUpperCase();
}

const reverseAndCapitalize = compose(capitalizeString, reverseString);

console.log(reverseAndCapitalize("hello"));
