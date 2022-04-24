'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.daysAgo = void 0;
const node_util_1 = require("node:util");
/**
 * Use this function to check when days ago has a date.
 *
 * @example
 * ```js
 * import { daysAgo } from 'bucky.js';
 *
 * let date = new Date();
 *  date.setYear(date.getFullYear() - 3);
 *
 * console.log(daysAgo(date));
 * ```
 */
function daysAgo(time) {
    if (!time)
        throw new TypeError('You haven\'t set a time!');
    if (!(0, node_util_1.isDate)(time))
        throw new TypeError('You have not set a valid date!');
    return Math.floor(((new Date()).getTime() - time.getTime()) / 864e5);
}
exports.daysAgo = daysAgo;
