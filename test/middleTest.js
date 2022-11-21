const {middle} = require('../middle');
const assert = require('chai').assert;


describe("#middle", () => {
  it(("returns Harry for Tom, Dick, Harry, James Susan"), () => {
    assert.deepEqual(middle(["tom", "dick", "harry", "james", "susan"]), ["harry"]);
  });

  it(("returns 2,3 for [1, 2, 3, 4]"), () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2,3]);
  });

});


// console.log(assertArraysEqual(middle([1, 2, 3, 4]), [2,3]));

