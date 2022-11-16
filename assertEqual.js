const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log( `✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log( `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

console.log(assertEqual("Lighthouse Labs", "Bootcamp"));
console.log(assertEqual(1,1));
console.log(assertEqual("1", 1));


// '❤️' from https://emojicombos.com/ then add them with quotes around them


ProcessingInstruction.argv