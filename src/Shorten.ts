/**
 * Use this function to limit the characters of a text.
 * 
 * @param {string} [text] Text to limit size.
 * @param {number} [limit=1] Maximum characters it can contain.
 * @returns {string}
 * 
 * @example
 * ```js
 * import { shorten } from 'bucky.js';
 * 
 * console.log(shorten(`your text 297483930293`, 9));
 * ```
 */
export function shorten(text: string, limit: number = 1): string {
  if (typeof text !== 'string') throw new TypeError('You have not defined a valid string!');
  if (isNaN(limit)) throw new TypeError('The limit can only be in numbers!');
  
  if (text.length <= limit) return text;
  return text.substring(0, limit).trim() + '...';
}