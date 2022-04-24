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
declare function generatePassword(count?: number): string;
export { generatePassword };
