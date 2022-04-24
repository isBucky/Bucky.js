'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeArrayDuplicates = void 0;
/**
 * Use this function to remove repeated strings within an Array.
 *
 * @example
 * ```js
 * import { removeArrayDuplicates } from 'bucky.js';
 *
 * console.log(removeArrayDuplicates(['foo', 'bar', 'foo']));
 * ```
 */
function removeArrayDuplicates(array) {
    if (!Array.isArray(array))
        throw new TypeError('You did not provide a valid array!');
    return array.filter((data, index) => array.indexOf(data) == index);
}
exports.removeArrayDuplicates = removeArrayDuplicates;
