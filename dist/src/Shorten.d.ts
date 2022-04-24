/**
 * Use this function to limit the characters of a text.
 *
 * @example
 * ```js
 * import { shorten } from 'bucky.js';
 *
 * console.log(shorten(`your text 297483930293`, 9));
 * ```
 */
declare function shorten(text: string, limit?: number): string;
export { shorten };
