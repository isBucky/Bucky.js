'use strict';

import path from 'node:path';
import { readdirSync } from 'node:fs';

/**
 * Use this function to check if a directory is empty.
 * 
 * @example
 * ```js
 * import { isEmptyDirectory } from 'bucky.js';
 * 
 * console.log(isEmptyDirectory('/path/to/directory/'));
 * ```
 */
function isEmptyDirectory(dir: string): boolean {
  try {
    let data = readdirSync(path.resolve(dir));
    return !!!data?.length;
  } catch(_) { return true; }
}

export { isEmptyDirectory };