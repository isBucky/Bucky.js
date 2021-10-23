'use strict';

module.exports = function shorten(text, limit) {
  if (typeof text !== 'string') throw new TypeError();
  if (isNaN(limit)) throw new TypeError();
  if (text.length <= limit) return text;
  return text.substr(0, limit).trim() + '...';
};