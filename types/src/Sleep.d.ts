/// <reference types="node" />
/**
 * Use this function to create a "sleep", to make the code below run after the given time.
 *
 * @param {number} [ms] Duration.
 * @returns {Promise<NodeJS.Timeout>}
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
export declare function sleep(ms: number): Promise<NodeJS.Timeout>;
