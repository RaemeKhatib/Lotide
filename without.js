// const eqArrays = function (firstArray, secondArray) {
//   for (let i = 0; i < firstArray.length; i++) {
//     if (firstArray[i] !== secondArray[i]) {
//       return false;
//     }
//   }
//   return true;
// };

// const assertArraysEqual = function(firstArray, secondArray) { 
//     if (eqArrays(firstArray, secondArray)) {
//       console.log( `✅✅✅ Assertion Passed: ${firstArray} === ${secondArray}`);
//     } else {
//       console.log( `🛑🛑🛑 Assertion Failed: ${firstArray} !== ${secondArray}`);
//   }
// };

const without = function(source, itemsToRemove) {
  let newArray = [];
  for( y = 0; y < source.length; y++){
    if (itemsToRemove.includes(source[y])) continue;
    newArray.push(source[y]);
  }
  console.log(newArray);
}; 


/*
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]); */
// let values = [1, 2, 3];
// without([1, 2, 3], [1]);
// without(["1", "2", "3"], [1, 2, "3"]); 
// assertArraysEqual(values, [1,2,3])

module.exports = without; 