/**
 * Use this function to remove repeated strings within an Array.
 * 
 * @param {string[]} [array] Array of strings to remove duplicates.
 * @returns {string[]}
 * 
 * @example
 * ```js
 * import { removeArrayDuplicates } from 'bucky.js';
 * 
 * console.log(removeArrayDuplicates(['foo', 'bar', 'foo']));
 * ```
 */
export function removeArrayDuplicates(array: string[]): string[] {
  if (!Array.isArray(array)) throw new TypeError('You did not provide a valid array!');
  return array.filter((data, index) => array.indexOf(data) == index);
}