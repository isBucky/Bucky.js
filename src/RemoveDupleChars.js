'use strict';

function RemoveDupleChars(string, count = 1) {
  if (typeof string !== 'string') throw new TypeError('You have not defined a valid string!');
  if (isNaN(count)) throw new TypeError('The count can only be numbers!');

  return string.split('')
    .filter((_, index, arr) => arr[index] !== arr[index + count])
    .join('');
};

module.exports = RemoveDupleChars;