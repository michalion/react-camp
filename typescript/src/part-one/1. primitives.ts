// Reminder: js "types"
new Number(5);
new String("a");
new Boolean(true);

/**
 * Primitives
 */

// variable declaration and type inference (implicit)
let firstNumber = 5;
let firstString = "text1";
let firstBoolean = true;

// what happens when you uncomment next line?
// firstNumber = 'nope!';

// variable declaration and explicit type
let secondNumber: number = 5;
let secondString: string = "text2";
let secondBoolean: boolean = false;

// what type information gives us?
console.log(firstNumber.toExponential());
console.log(firstString.toUpperCase());

// secondString.includes();

if (firstBoolean) {
  console.log("if executed!");
}
