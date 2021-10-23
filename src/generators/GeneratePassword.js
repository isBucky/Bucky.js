'use strict';

module.exports = function GeneratePassword(count = 20) {
  let password = '';
  while (password.length < count)
    password += Math.random().toString(36).substr(2);
  return password.substr(0, count);
}