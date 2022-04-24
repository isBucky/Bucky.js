/**
 * Use this function to see how much one key resembles another.
 *
 * @example
 * ```js
 * import { compareStrings } from 'bucky.js';
 *
 * console.log(compareStrings('foo', 'bar'));
 * ```
 */
declare function compareStrings(key: string, target: string): number;
export { compareStrings };
