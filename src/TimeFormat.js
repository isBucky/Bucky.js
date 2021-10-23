'use strict';

const isDate = require('./verifications/IsDate.js');

function TimeFormat(time, time_zone = 0) {
  if (!time) throw new TypeError();
  if (!isDate(time)) throw new TypeError();
  
  time.setHours(time.getHours() - time_zone);
  
  let
    year = time.getUTCFullYear(),
    month = time.getUTCMonth() + 1,
    day = time.getUTCDate();
    
  let
    hours = time.getUTCHours(),
    minutes = time.getUTCMinutes(),
    seconds = time.getUTCSeconds();
    
  day = day < 10 ? '0' + day : day;
  month = month < 10 ? '0' + month : month;
  hours = hour < 10 ? '0' + hours : hours;
  minutes = minute < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;
  
  return {
    year, month, day, hours,
    minutes, seconds,
    parseMs: time.getTime()
  };
}

module.exports = TimeFormat;