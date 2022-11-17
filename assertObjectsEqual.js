const eqObjects = function(object1, object2) {
  let firstObject = Object.keys(object1);
  let secondObject = Object.keys(object2);
  if (firstObject.length !== secondObject.length) {
    return false;
  } for (let key in object1) {
    if (object1[key] !== object2[key])
      return false;
  }
  return true;
};


const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; //prevents [Object Object] on return

  return eqObjects(actual, expected) ? //checks true/false in helper function
    console.log(`✅✅✅ Assertion Passed: ${ inspect(actual) } === ${ inspect(expected) }`) :
    console.log(`🛑🛑🛑 Assertion Failed: ${ inspect(actual) } === ${ inspect(expected) }`);
};


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
