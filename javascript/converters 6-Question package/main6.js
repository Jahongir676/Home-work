const { arrayToObject } = require('./arrayToObject.js')
console.log(arrayToObject([['a', 1], ['b', 2]]));

const { objectToArray } = require('./objectToArray.js')
console.log(objectToArray({ a: 1, b: 2 }));

const { stringToBoolean } = require('./stringToBolean.js')
console.log(stringToBoolean('1'));