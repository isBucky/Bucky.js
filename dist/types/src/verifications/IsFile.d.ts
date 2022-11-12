/**
 * Use this function to check whether it is a file or not.
 *
 * @param {string} [file] File path to be verified.
 * @returns {boolean}
 *
 * @example
 * ```js
 * import { isFile } from 'bucky.js';
 * import path from 'node:path';
 *
 * let file = path.resolve('path', 'to', 'file');
 * console.log(isEmptyFile(file)); // Returns a Boolean value.
 * ```
 */
declare function isFile(file: string): boolean;
export { isFile };
