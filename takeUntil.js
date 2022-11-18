const takeUntil = function(array, callback) {
  let results = [];
  for (item of array) {
    if (callback(item)) {
      return results;
    }
    else {
      results.push(item);
    }
  }
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

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