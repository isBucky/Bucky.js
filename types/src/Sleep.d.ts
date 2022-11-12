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
declare function sleep(ms: number): Promise<void>;
export { sleep };
