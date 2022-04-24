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
declare function daysAgo(time: Date): number;
export { daysAgo };
