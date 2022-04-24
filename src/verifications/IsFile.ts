'use strict';

import path from 'node:path';
import { lstatSync } from 'node:fs';
  
/**
 * Use this function to check whether it is a file or not.
 * 
 * @example
 * ```js
 * import { isFile } from 'bucky.js';
 * 
 * console.log(isFile('/path/to/file'));
 * ```
 */
function isFile(file: string): boolean {
  try {
    let data = lstatSync(path.resolve(file));
    return !!data?.isFile();
  } catch(_) { return false; }
}

export { isFile };