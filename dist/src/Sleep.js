'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.sleep = void 0;
/**
 * Use this function to create a "sleep", to make the code below run after the given time.
 *
 * @param {number} [ms] Duration.
 * @returns {Promise<void>}
 *
 * @example
 * ```js
 * import { sleep } from 'bucky.js';
 *
 * (async() => {
 *   console.log('foo');
 *   await sleep(5000); // Sets the time in milliseconds
 *   console.log('bar');
 * })();
 * ```
 */
function sleep(ms) {
    if (isNaN(ms))
        throw new TypeError('Provide valid time to wait!');
    return new Promise(res => setTimeout(res, ~~(ms)));
}
exports.sleep = sleep;
;
