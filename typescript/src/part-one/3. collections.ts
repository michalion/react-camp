let arrayOfWhat = [];

let firstStringArray = ["a", "b", "c"];
let secondStringArray: string[] = ["a", "b", "c"];
let thirdStringArray: string[] = [];
let firstNumberArray: number[] = [1, 2, 3, 4];

// what if we want to support everything? (diamond op & generics)
function logCollection(arg: string[]) {
  console.log(...arg);
}

console.log("log collection:", logCollection(firstStringArray));

// tuples
let firstTuple;

// how do we type that first arg is number, second string, third boolean etc.?
firstTuple = [1, "foo", true, "bar"];
