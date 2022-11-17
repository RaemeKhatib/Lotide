const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

// const findKeyByValue = function(object, value){
//   const keys = Object.keys(object);
//  for (const key of keys) {
//   if (object[key] === value){
//     return key;
//   }
//  }
// };


const findKeyByValue = function (object, value) {
  for (let key in object) {
    if (object[key] === value) {
      return key;
    }
  }
};

findKeyByValue(bestTVShowsByGenre, "drama")
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);


//this is if we search by the key (so drama, and get the Wire)
// const findValueByKey = function(object, key){
//   const values = Object.values(object);
//  for (const value of values) {
//   if (object[key] === value){
//     return value;
//   }
//  }
// };