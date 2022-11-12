'use strict';

/**
 * Use this function to remove unwanted characters.
 * 
 * @param {string} [text] Text you want to remove characters from.
 * @returns {string}
 * 
 * @example
 * ```js
 * import { removeAcents } from 'bucky.js';
 * 
 * console.log(removeAcents('Fõò, Bãr'));
 * ```
 */
function removeAcents(text: string): string {
  if (typeof text !== 'string') throw new TypeError('You have not defined a valid string!');
  return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
};

export { removeAcents };