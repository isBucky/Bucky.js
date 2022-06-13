'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmail = void 0;
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
function isEmail(email) {
    if (typeof email !== 'string')
        return false;
    return /^[\w.\+]+@\w+.\w{2,}(?:.\w{2})?$/.test(email);
}
exports.isEmail = isEmail;
