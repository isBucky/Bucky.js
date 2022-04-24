'use strict';

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
function generatePassword(count: number = 20): string {
  if (isNaN(count)) throw new TypeError('Password length numbers can only be in numbers!');
  
  let password = '';
  while (password.length < count)
    password += Math.random().toString(36).substr(2);
    
  return password.substr(0, count);
}

export { generatePassword };