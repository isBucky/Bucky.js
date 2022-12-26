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
export declare function shorten(text: string, limit?: number): string;
