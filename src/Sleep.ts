'use strict';

/**
 * Use this function to create a "sleep", to make the code below run after the given time.
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
function sleep(ms: number): Promise<void> {
  if (isNaN(ms)) throw new TypeError('Provide valid time to wait!');
  return new Promise(res => setTimeout(res, ~~(ms)));
};

export { sleep };