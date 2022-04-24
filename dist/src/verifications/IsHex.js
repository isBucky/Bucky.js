'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.isHex = void 0;
/**
 * Use this function to check whether a hex or not.
 *
 * @example
 * ```js
 * import { isHex } from 'bucky.js';
 *
 * console.log(IsHex('#FFA500'));
 * ```
 */
function isHex(hex) {
    if (!hex)
        return false;
    return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(hex);
}
exports.isHex = isHex;
