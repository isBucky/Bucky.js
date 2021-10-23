'use strict';

const isDate = require('./verifications/IsDate.js');

module.exports = function DaysAgo(time) {
  if (!time) throw new TypeError();
  if (!isDate(time)) throw new TypeError();
  
  let
    now = new Date(),
    diff = now.getTime() - time.getTime(),
    days = Math.floor(diff / 86400000);
  return days;
};