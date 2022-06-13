/**
 * Use this function to verify valid emails.
 *
 * @param {string} [email] Email to be verified.
 * @returns {boolean}
 *
 * @example
 * ```js
 * import { isEmail } from 'bucky.js';
 *
 * let myEmail = 'your.email@yourdomain.com';
 * console.log(isEmail(myEmail)); // Returns a Boolean value.
 * ```
 */
declare function isEmail(email: string): boolean;
export { isEmail };
