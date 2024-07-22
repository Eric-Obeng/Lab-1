const {
  capitalize,
  reverse,
  isPalindrome,
  wordCount,
  double,
  filterEven,
  sum,
  average,
  fullName,
  isAdult,
  filterByAge,
  compose,
} = require("./Weeek1.2");

test("capitalize function, capitalizes the first letter os a string", () => {
  expect(capitalize("eric")).toBe("Eric");
  expect(capitalize("aMaliTecH")).toBe("Amalitech");
});

test("reverse string", () => {
  expect(reverse("Amalitech")).toBe("hcetilamA");
});

test("isPalindrome function", () => {
  expect(isPalindrome("aba")).toBe(true);
  expect(isPalindrome("abc")).toBe(false);
});

test("wordCount function", () => {
  expect(wordCount("Welcome to Amalitech")).toBe(3);
  expect(wordCount("This is a test")).toBe(4);
});

// Task 2: Array Transformations
test("double function", () => {
  expect(double([2, 4, 6])).toEqual([4, 8, 12]);
});

test("filterEven function", () => {
  expect(filterEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])).toEqual([
    2, 4, 6, 8, 10, 12,
  ]);
});

test("sum function", () => {
  expect(sum([1, 2])).toBe(3);
  expect(sum([1, 2, 3, 4, 5])).toBe(15);
});

test("average function", () => {
  expect(average([10, 20, 30])).toBe(20);
  expect(average([])).toBe(0);
});

// Task 3: Object Transformation
test("fullName function", () => {
  const person = { firstName: "Eric", lastName: "Obeng" };
  expect(fullName(person)).toBe("Eric Obeng");
});

test("isAdult function", () => {
  const person1 = { name: "Eric", age: 20 };
  const person2 = { name: "Rhoda", age: 16 };
  expect(isAdult(person1)).toBe(true);
  expect(isAdult(person2)).toBe(false);
});

test("filterByAge function", () => {
  const people = [
    { name: "Eric", age: 20 },
    { name: "Rhoda", age: 16 },
    { name: "Charlie", age: 25 },
    { name: "PK", age: 17 },
  ];
  expect(filterByAge(people, 18)).toEqual([
    { name: "Eric", age: 20 },
    { name: "Charlie", age: 25 },
  ]);
});

// Task 4: Function Composition
test("compose function", () => {
  const reverseAndCapitalize = compose(
    (str) => str.toUpperCase(),
    (str) => str.split("").reverse().join("")
  );

  expect(reverseAndCapitalize("hello")).toBe("OLLEH");
});
