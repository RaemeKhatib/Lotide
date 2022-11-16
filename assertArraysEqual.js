const eqArrays = function (firstArray, secondArray) {
  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) {
      return false;
    }
  }
  return true;
};



const assertArraysEqual = function(firstArray, secondArray) { 
    if (eqArrays(firstArray, secondArray)) {
      console.log( `✅✅✅ Assertion Passed: ${firstArray} === ${secondArray}`);
    } else {
      console.log( `🛑🛑🛑 Assertion Failed: ${firstArray} !== ${secondArray}`);
  }
};

