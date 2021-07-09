// any
let anything: any;

anything = 5;
anything = "text";

// use unknown instead

// never (this type is rare)
function batman() {
  while (true) {
    console.log("NA");
  }
}

function bugThrower(): never {
  throw new Error("Oh no!");
}

// void

let message = "honk honk 🚗";

function atCrossroads(msg: string) {
  console.log(msg);
}

// null, undefined
// strict null checks (union)
let discount: string | null = "10";

function clearDiscount() {
  // how do we fix this assignment?
  discount = null;
}

// literals
let color: string = "red";

function changeColor(col: any) {
  color = col;
}

changeColor("blue");

console.log(`ChangeColor results in ${color}`);

function selectColor(col: "red" | "green" | "blue") {
  color = col;
}

selectColor("green");

console.log(`SelectingColor results in ${color}`);

// same goes with numbers!
let podiumPlace: number = 1;

function setPodiumPosition(p: 1 | 2 | 3) {
  podiumPlace = p;
}

setPodiumPosition(3);

console.log(`SettingPodiumPosition results in ${color}`);
