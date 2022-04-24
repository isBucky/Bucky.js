'use strict';

import { generateRGB } from './GenerateRGB';

/**
 * A function that will generate random decimals.
 * @returns {number}
 * 
 * @example
 * ```js
 * import { generateDecimal } from 'bucky.js';
 * 
 * console.log(generateDecimal()); // It will generate a randomized decimal.
 * ```
 */
function generateDecimal(): number {
  let [R, G, B] = generateRGB();
  return ((R << 16) + (G << 8) + B);
}

export { generateDecimal };