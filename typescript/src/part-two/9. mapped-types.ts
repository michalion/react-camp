/**
 * Changing types in style
 */

/**
 * Readonly
 */

// We had previously a typedDog! how can we reuse it?
type MyReadonly<Type> = {
  readonly [P in keyof Type]: Type[P];
};

const superUniqeDog: Readonly<TypedDog> = typedDog;

// what happens if we remove return type?
const freezeDog = <T>(dog: T) => {
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
type MyPartial<Type> = {
  [Property in keyof Type]+?: Type[Property];
};

const updateObject = <T>(obj: T, update: Partial<T>): T => ({
  ...obj,
  ...update,
});

const afterDinnerDog = updateObject(pepe, { goodDog: true });

/**
 * Required
 */

// let's imagine that we need actual value of an optional property

type HeaderType = {
  text: string;
  fontSize?: number;
};

type MyRequired<Type> = {
  [Property in keyof Type]-?: Type[Property];
};

const HeaderWithCustomProps = (props: Required<HeaderType>) => {
  if (typeof props.fontSize === "undefined")
    throw new Error("no fontSize specified");

  return props.text;
};

HeaderWithCustomProps({ text: "foo", fontSize: 18 });
