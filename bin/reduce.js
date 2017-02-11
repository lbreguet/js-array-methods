'use strict';

const examples = require('../lib/examples');
const reduce = require('../lib/reduce.js');

let workingArray = examples.numbers.whole;

let result = reduce(workingArray, (a, c /*, i, a */) => a + c);

result = workingArray.reduce((a, e) => a + e);

console.log('reduce input', workingArray);
console.log('reduce result', result);
