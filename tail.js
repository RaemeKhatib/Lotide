const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log( `✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log( `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(item) {
  let newTail = item.slice(1);
  return newTail;
};


module.exports = tail;
