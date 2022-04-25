'use strict';

import path from 'node:path';
import { lstatSync } from 'node:fs';
  
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
function isFile(file: string): boolean {
  try {
    let data = lstatSync(path.resolve(file));
    return !!data?.isFile();
  } catch(_) { return false; }
}

export { isFile };