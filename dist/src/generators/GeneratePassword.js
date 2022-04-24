'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.generatePassword = void 0;
/**
 * This function will generate a password with the number of characters you define in the parameters.
 *
 * @example
 * ```js
 * import { generatePassword } from 'bucky.js';
 *
 * console.log(generatePassword(15));
 * ```
 */
function generatePassword(count = 20) {
    if (isNaN(count))
        throw new TypeError('Password length numbers can only be in numbers!');
    let password = '';
    while (password.length < count)
        password += Math.random().toString(36).substr(2);
    return password.substr(0, count);
}
exports.generatePassword = generatePassword;
