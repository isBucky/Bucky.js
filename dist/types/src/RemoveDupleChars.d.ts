/**
 * Use this function to remove repeated letters from a string.
 *
 * @param {string} [text] Text that will remove repeated words.
 * @param {number?} [count] Amount of removal of duplicate words.
 * @returns {string}
 *
 * @example
 * ```js
 * import { removeDupleChars } from 'bucky.js';
 *
 * console.log(removeDupleChars('foooo barrr'));
 * ```
 */
declare function removeDupleChars(text: string, count?: number): string;
export { removeDupleChars };
