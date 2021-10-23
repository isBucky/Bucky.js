'use strict';

module.exports = function IsDate(date) {
  if (!date) return false;
  date = new Date(date);
  if (date.toString() == 'Invalid Date')
    return false;
  else
    return true;
}