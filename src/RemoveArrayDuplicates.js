'use strict';

function RemoveArrayDuplicates(array) {
  if (!Array.isArray(array)) throw new TypeError('You did not provide a valid array!');
  return array.filter((data, index) => array.indexOf(data) == index);
};

module.exports = RemoveArrayDuplicates;