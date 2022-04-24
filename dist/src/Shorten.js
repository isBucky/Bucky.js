'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.shorten = void 0;
/**
 * Use this function to limit the characters of a text.
 *
 * @example
 * ```js
 * import { shorten } from 'bucky.js';
 *
 * console.log(shorten(`your text 297483930293`, 9));
 * ```
 */
function shorten(text, limit = 1) {
    if (typeof text !== 'string')
        throw new TypeError('You have not defined a valid string!');
    if (isNaN(limit))
        throw new TypeError('The limit can only be in numbers!');
    if (text.length <= limit)
        return text;
    return text.substr(0, limit).trim() + '...';
}
exports.shorten = shorten;
