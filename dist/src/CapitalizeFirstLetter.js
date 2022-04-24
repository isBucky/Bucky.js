'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.capitalizeFirstLetter = void 0;
/**
 * Use this function to capitalize the first letter of a string.
 *
 * @example
 * ```js
 * import { capitalizeFirstLetter } from 'bucky.js';
 *
 * console.log(capitalizeFirstLetter('your string'));
 * ```
 */
function capitalizeFirstLetter(text) {
    if (!text || typeof text !== 'string')
        throw new TypeError('You did not provide a valid string!');
    return text.replace(/\w\S*/g, (str) => str.charAt(0).toUpperCase() + str.substr(1).toLowerCase());
}
exports.capitalizeFirstLetter = capitalizeFirstLetter;
;
