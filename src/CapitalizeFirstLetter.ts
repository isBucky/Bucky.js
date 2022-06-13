'use strict';

/**
 * Use this function to capitalize the first letter of a string.
 * 
 * @param {string} [text] Text to capitalize the first letter.
 * @returns {string}
 * 
 * @example
 * ```js
 * import { capitalizeFirstLetter } from 'bucky.js';
 * 
 * console.log(capitalizeFirstLetter('your string'));
 * ```
 */
function capitalizeFirstLetter(text: string): string {
  if (!text || typeof text !== 'string') throw new TypeError('You did not provide a valid string!');
  return text.replace(/\w\S*/g, (str) =>
    str.charAt(0).toUpperCase() + str.substr(1).toLowerCase());
};

export { capitalizeFirstLetter }