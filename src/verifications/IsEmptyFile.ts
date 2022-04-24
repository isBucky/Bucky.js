'use strict';

import path from 'node:path';
import { readFileSync } from 'node:fs';

/**
 * Use this function to check if a file is empty.
 * 
 * @example
 * ```js
 * import { isEmptyFile } from 'bucky.js';
 * 
 * console.log(isEmptyFile('/path/to/file'));
 * ```
*/
function isEmptyFile(file: string): boolean {
  try {
    let data = readFileSync(path.resolve(file), 'utf8');
    return !!!data?.length;
  } catch(_) { return true; }
}

export { isEmptyFile };