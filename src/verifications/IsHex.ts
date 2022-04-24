'use strict';

/**
 * Use this function to check whether a hex or not.
 * 
 * @example
 * ```js
 * import { isHex } from 'bucky.js';
 * 
 * console.log(IsHex('#FFA500'));
 * ```
 */
function isHex(hex: string): boolean {
  if (!hex) return false;
  return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(hex);
}

export { isHex };