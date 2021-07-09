enum COLOR_TYPE_WITH_NUMBER {
  Red,
  Green,
  Blue,
}

enum ColorTypeWithStrings {
  Red = "RED",
  Green = "GREEN",
  Blue = "BLUE",
}

function speakColor(arg: ColorTypeWithStrings) {
  switch (arg) {
    case ColorTypeWithStrings.Red:
      return `This is red! ${arg}`;
    case ColorTypeWithStrings.Green:
      return `This is green! ${arg}`;
    case ColorTypeWithStrings.Blue:
      return `This is blue! ${arg}`;
  }
}

console.log("Red", speakColor(ColorTypeWithStrings.Red));
console.log("Green", speakColor(ColorTypeWithStrings.Green));
console.log("Blue", speakColor(ColorTypeWithStrings.Blue));
