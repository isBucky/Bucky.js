'use strict';

const decode = require('./Decoder.js');

function Compare(string1, string2, secret, callback) {
  if (typeof string1 !== 'string') throw new TypeError('The first string was not provided!');
  if (typeof string2 !== 'string') throw new TypeError('The second string was not provided!');
  if (typeof secret !== 'string') throw new TypeError('You didn\'t provide a secret password!');
  
  string1 = decode(string1, secret);
  
  if (callback && typeof callback == 'function')
    return callback(string1 == string2);
  else return string1 == string2;
};

module.exports = Compare;