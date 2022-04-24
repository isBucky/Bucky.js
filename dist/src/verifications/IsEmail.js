'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmail = void 0;
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
function isEmail(email) {
    if (typeof email !== 'string')
        return false;
    return /^[\w.\+]+@\w+.\w{2,}(?:.\w{2})?$/.test(email);
}
exports.isEmail = isEmail;
