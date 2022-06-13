'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.findArrayDuplicates = void 0;
/**
 * Use this function to remove duplicate items from an Array.
 *
 * @param {string[]} [target] Array containing the duplicate strings.
 * @returns {string[]}
 *
 * ```js
 * import { findArrayDuplicates } fron 'bucky.js';
 *
 * console.log(findArrayDuplicates(['aaa', 'bbb', 'aaa']));
 * ```
 */
function findArrayDuplicates(target) {
    if (!Array.isArray(target))
        throw new TypeError('You did not provide a valid array!');
    target = target.filter(i => typeof i == 'string');
    if (!target.length)
        throw new TypeError('Array cannot be empty!');
    return target.filter((data, index) => target.indexOf(data) !== index);
}
exports.findArrayDuplicates = findArrayDuplicates;
