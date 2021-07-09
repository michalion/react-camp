/**
 * functions & typing functions
 */

// The following function declaration is flagged by TS
// function foo(a,b) {}

// what's the return type of this function?
function repeatNTimes(text: string, times: number) {
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
let anotherArrowFunc;

// anotherArrowFunc = (arg) => (arg ? "yes" : "no");

// optional params: arg here is not mandatory
let optionalArrowFunc;

// optionalArrowFunc = (arg) => (arg ? "yes" : "no");

// console.log(`Optional Arrow Func ${optionalArrowFunc()}`)

// default args in function
function multiply(x: number, y: number) {
  return x * y;
}

console.log(`Multiply 2x2=${multiply(2, 2)}`);

// let's assume that y is 1 if not provided
// console.log(`Multiply 2x1=${multiply(2)}`);
