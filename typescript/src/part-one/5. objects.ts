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
