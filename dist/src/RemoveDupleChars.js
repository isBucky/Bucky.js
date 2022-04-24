'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeDupleChars = void 0;
/**
 * Use this function to remove repeated letters from a string.
 *
 * @example
 * ```js
 * import { removeDupleChars } from 'bucky.js';
 *
 * console.log(removeDupleChars('foooo barrr'));
 * ```
 */
function removeDupleChars(text, count) {
    if (typeof text !== 'string')
        throw new TypeError('You have not defined a valid string!');
    if (count && isNaN(count))
        throw new TypeError('The count can only be numbers!');
    return text.split('')
        .filter((_, index, arr) => arr[index] !== arr[index + (count !== null && count !== void 0 ? count : 1)]).join('');
}
exports.removeDupleChars = removeDupleChars;
;
