const {middle, assertArraysEqual} = require('../middle');


console.log(assertArraysEqual(middle(["tom", "dick", "harry", "james", "susan"]), ["harry"]));
console.log(assertArraysEqual(middle([1, 2, 3, 4]), [2,3]));

