'use strict';

module.exports = function RemoveDupleChars(string, count = 1) {
  if (typeof string !== 'string') throw new TypeError();
  if (isNaN(count)) throw new TypeError();
  
  return string.split('')
    .filter((_, i, b) => b[i] != b[i + count])
    .join('');
};