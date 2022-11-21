const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log( `✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log( `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};



// '❤️' from https://emojicombos.com/ then add them with quotes around them


module.exports = assertEqual;