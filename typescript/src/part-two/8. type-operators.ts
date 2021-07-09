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
type TypedDog = typeof typedDog;

// const anotherTypedDog: TypedDog = {}

/**
 * keyof
 * type-safe lookup
 */

// how can we make this function type-safe, while accessing properties?

// const extractValue = (d: TypedDog, key: string) => d[key];

// const dogName = extractValue(typedDog, "name");
