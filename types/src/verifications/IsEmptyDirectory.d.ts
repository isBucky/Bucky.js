/**
 * Use this function to check if a directory is empty.
 *
 * @param {string} [dir] Directory path to check.
 * @returns {boolean}
 *
 * @example
 * ```js
 * import { isEmptyDirectory } from 'bucky.js';
 * import path from 'node:path';
 *
 * let directory = path.resolve('path', 'to', 'directory');
 * console.log(isEmptyDirectory(directory)); // Returns a Boolean value.
 * ```
 */
export declare function isEmptyDirectory(dir: string): boolean;
