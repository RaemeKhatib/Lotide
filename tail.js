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


const result = tail(["Hello", "Lighthouse", "Labs"]);
console.log(assertEqual(result.length,2));
console.log(assertEqual(result[0], "Lighthouse"));
console.log(assertEqual(result[1], "Labs"));