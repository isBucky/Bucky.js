/**
 * Use this function to format milliseconds.
 *
 * @param {number | Date} [time] Time you want to transform.
 * @param {string?} [formatted] Use to format milliseconds in full.
 * @returns {object}
 *
 * @example
 * ```js
 * import { ms } from 'bucky.js';
 *
 * // Unformatted:
 * console.log(ms(153635));
 *
 * // Formatted:
 * console.log(ms(153635, 'en-us'));
 * ```
 */
declare function ms(time: number | Date, formatted?: string): object | string;
export { ms };
