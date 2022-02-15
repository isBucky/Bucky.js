'use strict';

const generateRGB = require('./GenerateRGB.js');

function GenerateHex() {
  let [R, G, B] = generateRGB();
  return '#' + ((1 << 24) + (R << 16) + (G << 8) + B)
    .toString(16).slice(1);
};

module.exports = GenerateHex;