let arrayOfWhat = [];

let firstStringArray = ["a", "b", "c"];
let secondStringArray: string[] = ["a", "b", "c"];
let thirdStringArray: string[] = [];
let firstNumberArray: number[] = [1, 2, 3, 4];

let arrayception: string[][];

arrayception = [["1"], ["2"]];

let diamondArray: Array<number> = [1, 2, 3];

// what if we want to support everything? (diamond op & generics)
function logCollection<Type>(arg: Type[]) {
  console.log(...arg);
}

console.log("log collection:", logCollection(firstStringArray));

let a = {
  author: "",
  blogData: {},
  authorIsLoggedIn: true,
  viewCount: 5,
};

let aTuple = [a.author, a.blogData, a.authorIsLoggedIn, a.viewCount];

// tuples
let firstTuple: [number, string, boolean, string];

// how do we type that first arg is number, second string, third boolean etc.?
firstTuple = [1, "foo", true, "bar"];
