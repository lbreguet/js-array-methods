'use strict';

const reduce = function (originalArray, callback, initialValue) {
  // Make a copy or originalArray
  const workingArray = originalArray.slice();

  // make clear what the result is
  let accumulator = initialValue;

  // if no initial value
  if (typeof initialValue === 'undefined') {
    // make the first element the initial value
    accumulator = workingArray.shift();
  }

  // call the callback for each element
  workingArray.forEach(function (element, index /*, workingArray  */) {
    accumulator = callback(accumulator, element, index, originalArray);
  });

  // return the summary0
  return accumulator;
};

module.exports = reduce;
