// const assertEqual = function (actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

const countLetters = function (allLetters) {
  const results = {};
  for (const letter of allLetters) {
    if(letter === " ") continue; 
    // i want to check results array
    // add letters from result array
    // get count of results array
    if (results[letter]) {
      results[letter] += 1;
    } else {
      // initializing the letter with 1
      results[letter] = 1;
    }
  }
  return results;
};

// console.log(countLetters("lighthouse in the house"))

module.exports = countLetters;