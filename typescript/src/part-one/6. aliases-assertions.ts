// Type definition and aliases

type Label = string;

let foo: Label = "test";

let bar: string = "test";

bar = foo;

// this time for function

const enlargeText = (text: string) => text.toUpperCase();

// assertions
type Header = {
  text: string;
  fontSize: number;
};

// const header: Header = { text: 'Hello World!'};
const header: Header = { text: "Hello World!", fontSize: 18 };

const x = JSON.stringify(header);

// how can we type this function
function getFontSize(json: string) {
  return JSON.parse(json); // diamond / as
}
