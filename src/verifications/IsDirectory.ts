'use strict';

import path from 'node:path';
import { lstatSync } from 'node:fs';

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
function isDirectory(dir: string): boolean {
  try {
    let data = lstatSync(path.resolve(dir));
    return !!data?.isDirectory();
  } catch (_) { return false; }
}

export { isDirectory };