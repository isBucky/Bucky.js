'use strict';

const { isDate } = require('node:util');

function DaysAgo(time) {
  if (!time) throw new TypeError('You haven\'t set a time!');
  if (!isDate(time)) throw new TypeError('You have not set a valid date!');
  return Math.floor(((new Date()).getTime() - time.getTime()) / 864e5);
};

module.exports = DaysAgo;