type Doggo = {
  emoji: string;
  name: string;
  age: number;
  breed?: string;
  bark?: () => void;
};

let dog: Doggo;

dog = {
  emoji: "🐕",
  name: "Maja",
  age: 4,
  bark: () => console.log("Bark!"),
};

// hover and check the signature of the object
dog.breed = "Shetland Sheepdog";
// define type

// non-null assertion operator !
console.log(dog.bark!());

class Foo {
  constructor(public baz: string) {}
}

class Qux {
  constructor(public qwe: string) {}
}

const instanceOfFoo = new Foo("bar");
const instanceOfQux = new Qux("QWE");

function speakTheTruth(arg: Foo | Qux) {
  if (arg instanceof Foo) {
    return arg.baz;
  } else if (arg instanceof Qux) {
    return arg.qwe;
  }

  return "You are hacking";
}

console.log("foo:", speakTheTruth(instanceOfFoo));
console.log("qux:", speakTheTruth(instanceOfQux));

console.log("hacky hacky:", speakTheTruth({} as Foo));
