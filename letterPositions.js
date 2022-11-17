const eqArrays = function (firstArray, secondArray) {
  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function (firstArray, secondArray) {
  if (eqArrays(firstArray, secondArray)) {
    console.log(`✅✅✅ Assertion Passed: ${firstArray} === ${secondArray}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${firstArray} !== ${secondArray}`);
  }
};






const letterPositions = function (sentences) {
  const results = {};
  for (let i = 0; i < sentences.length; i++) {
    let letter = sentences[i];
    if (letter === " ") continue;
    if (results[letter]) {
    results[letter] = [...results[letter], i]; 
     } else {
      results[letter] = [i];
     }

    // logic to update results here
    
  }
  return results;
};

console.log(letterPositions('hello'));
assertArraysEqual(letterPositions("hello").l, [2,3]);