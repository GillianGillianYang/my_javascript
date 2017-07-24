//require , module.exports (object function array var...)

let obj = require('./myModule');
console.log(obj.max(2, 5), obj.MAX_NUMBER);

//sugar
let { max, MAX_NUMBER } = require('./myModule');
console.log(max(100, 30));
console.log(MAX_NUMBER);

let reader = require('./read');
let writer = require('./write');