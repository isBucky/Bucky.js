'use strict';

import { generateRGB } from './GenerateRGB';

/**
 * A function that will generate random decimals.
 * 
 * @example
 * ```js
 * import { generateDecimal } from 'bucky.js';
 * 
 * console.log(generateDecimal());
 * ```
 */
function generateDecimal(): number {
  let [R, G, B] = generateRGB();
  return ((R << 16) + (G << 8) + B);
}

export { generateDecimal };