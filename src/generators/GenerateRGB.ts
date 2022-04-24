'use strict';

/**
 * This function generates an Array with RGB values:
 * * Array[0]: `Value referring to "Red"`
 * * Array[1]: `Value referring to "Green"`
 * * Array[2]: `Value referring to "Blue"`
 * 
 * @example
 * ```js
 * import { generateRGB } from 'bucky.js';
 * 
 * console.log(generateRGB());
 * ```
 */
function generateRGB(): number[] {
  return [
    ~~(Math.random() * 255),
    ~~(Math.random() * 255),
    ~~(Math.random() * 255)
  ];
}

export { generateRGB };