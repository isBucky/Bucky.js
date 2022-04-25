'use strict';

import path from 'node:path';
import { readFileSync } from 'node:fs';

/**
 * Use this function to check if a file is empty.
 * 
 * @param {string} [file] File path to be verified.
 * @returns {boolean}
 * 
 * @example
 * ```js
 * import { isEmptyFile } from 'bucky.js';
 * import path from 'node:path';
 * 
 * let file = path.resolve('path', 'to', 'file');
 * console.log(isEmptyFile(file)); // Returns a Boolean value.
 * ```
*/
function isEmptyFile(file: string): boolean {
  try {
    let data = readFileSync(path.resolve(file), 'utf8');
    return !!!data?.length;
  } catch(_) { return true; }
}

export { isEmptyFile };