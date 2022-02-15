'use strict';

function Sleep(ms) {
  if (isNaN(ms)) throw new TypeError('Provide valid time to wait!');
  return new Promise(res => setTimeout(res, ~~(ms)));
};

module.exports = Sleep;