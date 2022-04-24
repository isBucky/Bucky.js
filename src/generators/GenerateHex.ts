'use strict';

import { generateRGB } from './GenerateRGB';

/**
 * A function that generates random hexadecimal.
 * 
 * @example
 * ```js
 * import { generateHex } from 'bucky.js';
 * 
 * console.log(generateHex());
 * ```
 */
function generateHex(): string {
  let [R, G, B] = generateRGB();
  return '#' + ((1 << 24) + (R << 16) + (G << 8) + B)
    .toString(16).slice(1);
}

export { generateHex };