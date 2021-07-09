/**
 * Type operators
 * By now we know how to do types
 * But how do we check the types?
 * Typescript types go away at runtime...
 */

/**
 * typeof
 */
const typedDog = {
  emoji: "🐕",
  name: "Maja",
  age: 4,
  goodDog: true,
};

// deriving type from actual object

// const anotherTypedDog: TypedDog = {}

/**
 * keyof
 * type-safe lookup
 */

// how can we make this function type-safe, while accessing properties?
type TypedDog = typeof typedDog;
type Wolf = TypedDog & { isWolf: boolean };

type TypedDogKeys = keyof TypedDog;
type TypedDogValues = TypedDog[TypedDogKeys];

const extractValue = <Type, Key extends keyof Type>(obj: Type, key: Key) =>
  obj[key];

const dogName = extractValue(typedDog, "name");

function userCanPetTheDog(animal: TypedDog | Wolf) {
  if (isWolf(animal)) {
    console.log("This is a WOLF!", animal.isWolf);
    return false;
  }

  console.log("This is a 🐕!", animal.name);
  return true;
}

// User defined type guard
function isWolf(animal: any): animal is Wolf {
  return animal.isWolf;
}
