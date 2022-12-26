/**
 * Use this function to check when days ago has a date.
 *
 * @param {Date} [time] Date of the last event.
 * @returns {number}
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
export declare function daysAgo(time: Date): number;
