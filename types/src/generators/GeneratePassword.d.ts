/**
 * This function will generate a password with the number of characters you define in the parameters.
 *
 * @param {number} [count=20] Set the number of characters to create.
 * @returns {string}
 *
 * @example
 * ```js
 * import { generatePassword } from 'bucky.js';
 *
 * let password = generatePassword(15); // 15 characters
 * console.log(password);
 * ```
 */
export declare function generatePassword(count?: number): string;
