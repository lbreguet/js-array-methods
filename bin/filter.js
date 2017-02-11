'use strict';

const examples = require('../lib/examples');
const filter = require('../lib/filter.js');

let workingArray = examples.numbers.whole;

let result = filter(workingArray, (e /*, i, a */) => e > 7);

console.log('filter input', workingArray);
console.log('filter result', result);
