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


const middle = function(array) {
  if (array.length <= 2){
    return [];
  } else if (array.length % 2 === 0) {
   let indexMiddle = (array.length / 2);
   let secondMiddle = indexMiddle - 1;
   let arrayOutput = [array[secondMiddle], array[indexMiddle]];
   return arrayOutput;
  }
  let output = (array.length -1) / 2;
  return [array[output]];
}



module.exports = {
  middle, assertArraysEqual
}