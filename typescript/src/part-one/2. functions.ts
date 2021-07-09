/**
 * functions & typing functions
 */

// The following function declaration is flagged by TS
// function uniqueNameOfTheFunction(a,b) {}

// what's the return type of this function?
function repeatNTimes(text: string, times: number): string {
  return new Array(times).fill(text).join(" ");
}

console.log("Repeat result:", repeatNTimes("Foo", 3));

function sumNumbers(a: number, b: number): number {
  // return "aaa";
  return a + b;
}

console.log("Sum Numbers result:", sumNumbers(1, 1));

// can this function signature be improved?
const arrowFunc = (arg: boolean): string => (arg ? "yes" : "no");

// how can this function signature be separated from assignment?

let anotherArrowFunc: (x: boolean) => string;
anotherArrowFunc = (arg) => (arg ? "yes" : "no");

// optional params: arg here is not mandatory
let optionalArrowFunc: (arg?: boolean) => string;

optionalArrowFunc = (arg) => (arg ? "yes" : "no");

console.log(`Optional Arrow Func ${optionalArrowFunc()}`);

// default args in function
function multiply(x: number, y = 1) {
  return x * y;
}

console.log(`Multiply 2x2=${multiply(2, 2)}`);

// let's assume that y is 1 if not provided
console.log(`Multiply 2x1=${multiply(2)}`);

type MultiplyWithDefault = (x: number, y?: number) => number;

const anotherMultiply: MultiplyWithDefault = (x, y = 1) => x * y;

// func overload
function reverse<T>(arg: T[]): T[];
function reverse(arg: string): string;

function reverse(arg: string | any[]) {
  if (Array.isArray(arg)) {
    return arg.reverse();
  }

  return arg.split("").reverse().join("");
}

const reversedString = reverse("ABCD");
const reversedArray = reverse([1, 2, 3, 4]);

console.log("Reversed string", reversedString);
console.log("Reversed array", reversedArray);

console.log("Typeof 1", {}, typeof {});
console.log("Typeof 2", [], typeof []);
console.log("Typeof 3", "string", typeof "string");
console.log("Typeof 4", 4, typeof 4);
console.log("Typeof 5", undefined, typeof undefined);
console.log("Typeof 6", null, typeof null);

// typeof guard
function toUpperCase(arg: string | number) {
  // to check eslint-rule
  if (typeof arg === "string") {
    return arg.toUpperCase();
  }
  return arg;
}

console.log("to upper", toUpperCase("text"));
console.log("to upper", toUpperCase(2));
``;
