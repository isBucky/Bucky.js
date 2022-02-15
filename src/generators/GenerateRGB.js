'use strict';

function GenerateRGB() {
  return [
    ~~(Math.random() * 255),
    ~~(Math.random() * 255),
    ~~(Math.random() * 255)
  ];
};

module.exports = GenerateRGB;