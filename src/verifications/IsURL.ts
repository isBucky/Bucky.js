'use strict';

/**
 * Use this function to check if it's a URL.
 * 
 * @example
 * ```js
 * import { isURL } from 'bucky.js';
 * 
 * console.log(isURL('https://www.npmjs.com/package/bucky.js'));
 * ```
 */
function isURL(link: string): boolean {
  let result;
  
  if (typeof link !== 'string') return false;
  try { result = new URL(link); }
  catch (_) { return false; }
  
  return ['http:', 'https:'].includes(result.protocol);
}

export { isURL };