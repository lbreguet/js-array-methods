'use strict';

const filter = function (workingArray, callback) {
  // the new array should be empty, there should be no fixed value
  // otherwise there will be empty values in the array at the end
  let newArray = [];
  workingArray.forEach((element, index, array) => {
    // put an `if` statement before pushing
    if (callback(element, index, array)) {
      newArray.push(element);
    }
  });
  return newArray;
};

module.exports = filter;
