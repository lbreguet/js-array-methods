'use strict';

const examples = require('../lib/examples');
const map = require('../lib/map.js');

let workingArray = examples.numbers.whole;

let result = map(workingArray, (e /*, i, a */) => e * 4);

console.log('map input', workingArray);
console.log('map result', result);
