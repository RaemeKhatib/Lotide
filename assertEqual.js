const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return String.fromCodePoint(0x2705) + String.fromCodePoint(0x2705) + String.fromCodePoint(0x2705) + "Assertion Passed: " + actual + " === " + expected;
  } else {
    return String.fromCodePoint(0x1F6D1) + String.fromCodePoint(0x1F6D1) + String.fromCodePoint(0x1F6D1) + "Assertion Failed: " + actual + " !== " + expected;
  }
};

console.log(assertEqual("Lighthouse Labs", "Bootcamp"));
console.log(assertEqual(1,1));
console.log(assertEqual("1", 1));


// '❤️' from https://emojicombos.com/ then add them with quotes around them