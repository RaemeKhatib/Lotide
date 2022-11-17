const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };


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

assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false);