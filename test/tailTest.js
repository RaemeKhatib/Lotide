const assert = require('chai').assert;
const tail = require('../tail');

const result = tail(["Hello", "Lighthouse", "Labs"]);


describe("#tail", () => {
  it("returns results length as 2", () => {
    tail(result)
    assert.lengthOf(result, 2);
  });
  
  it("returns labs for [Hello, Lighthouse, Labs]", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse" , "Labs"]);
  });


});



// console.log(assertEqual(result.length,2));
// console.log(assertEqual(result[0], "Lighthouse"));
// console.log(assertEqual(result[1], "Labs"));


