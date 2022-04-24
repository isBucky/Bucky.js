'use strict';

/**
 * Use this function to verify valid emails.
 * 
 * @example
 * ```js
 * import { isEmail } from 'bucky.js';
 * 
 * console.log(isEmail('youremail@gmail.com'));
 * ```
 */
function isEmail(email: string): boolean {
  if (typeof email !== 'string') return false;
  return /^[\w.\+]+@\w+.\w{2,}(?:.\w{2})?$/.test(email);
}

export { isEmail };