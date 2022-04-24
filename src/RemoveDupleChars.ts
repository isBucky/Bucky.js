'use strict';

/**
 * Use this function to remove repeated letters from a string.
 * 
 * @example
 * ```js
 * import { removeDupleChars } from 'bucky.js';
 * 
 * console.log(removeDupleChars('foooo barrr'));
 * ```
 */
function removeDupleChars(text: string, count?: number): string {
  if (typeof text !== 'string') throw new TypeError('You have not defined a valid string!');
  if (count && isNaN(count)) throw new TypeError('The count can only be numbers!');
  
  return text.split('')
    .filter((_, index, arr) =>
      arr[index] !== arr[index + (count ?? 1)]).join('');
};

export { removeDupleChars };