const assertEqual = require('./assertEqual');


const head = function(item) {
  return item[0];
};


module.exports = head;


console.log(head("[]","[2,3]"));
console.log(head([[],[2,3]]))