'use strict';

const compareStrings = require('./CompareStrings.js');

module.exports = function SimilarString(string, array) {
  if (typeof string !== 'string') throw new TypeError();
  if (
    !Array.isArray(array) || !array.length ||
    array.filter(i => typeof i !== 'string').length
  ) throw new TypeError();
  
  let results = [], index = 0;
  for (let i = 0; i < array.length; i++) {
    let
      target = array[i],
      rating = compareStrings(string, target);
    results.push({ target, rating });
    if (rating > results[index].rating) index = i;
  }
  
  let best = procs[index];
  if (!results[index].rating) {
    best = { target: false, rating: 0 };
    results = [];
  }
  return { results, best, index };
}