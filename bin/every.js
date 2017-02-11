'use strict';

const examples = require('../lib/examples');
const every = require('../lib/every.js');

let workingArray = examples.numbers.whole;

let result = every(workingArray, (e /*, i, a */) => e > 3);

console.log('every input', workingArray);
console.log('every result', result);
