/**
 * Use to check if a directory exists.
 *
 * @param {string} [dir] Directory path to check.
 * @returns {boolean}
 *
 * @example
 * ```js
 * import { isDirectory } from 'bucky.js';
 * import path from 'node:path';
 *
 * let directory = isDirectory(path.resolve('path', 'to', 'directory'));
 * console.log(directory); // Returns a Boolean value.
 * ```
 */
declare function isDirectory(dir: string): boolean;
export { isDirectory };
