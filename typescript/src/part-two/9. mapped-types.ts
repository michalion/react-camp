/**
 * Changing types in style
 */

/**
 * Readonly
 */

// We had previously a typedDog! how can we reuse it?
interface ReadonlyTypedDog {
  readonly name: string;
}

// what happens if we remove return type?
const freezeDog = (dog: TypedDog): ReadonlyTypedDog => {
  return Object.freeze(dog);
};

let pepe = {
  name: "Pepe",
  age: 4,
  emoji: "🐤",
  goodDog: true,
};

// Object.freeze operates on the argument, hence new reference here
const frozenPet = freezeDog({ ...pepe });

// frozenPet.age = 5;

/**
 * Partial
 * operate on a subset of data
 */
// how can we make it better?
interface PartialDog {
  goodDog?: boolean;
  name?: string;
  emoji?: string;
  age?: number;
}

const updateDog = (dog: TypedDog, update: PartialDog): TypedDog => ({
  ...dog,
  ...update,
});

const afterDinnerDog = updateDog(pepe, { goodDog: true });

/**
 * Required
 */

// let's imagine that we need actual value of an optional property
const petTheDog = (dog: TypedDog) => {
  if (dog.goodDog) {
    console.log(`Good ${dog.name}!`);
  } else {
    console.log(`Bad dog!`);
  }
};
