'use strict';

const generateRGB = require('./GenerateRGB.js');

function GenerateDecimal() {
  let [R, G, B] = generateRGB();
  return ((R << 16) + (G << 8) + B);
};

module.exports = GenerateDecimal;