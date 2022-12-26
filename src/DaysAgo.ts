import { isDate } from 'node:util';

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
export function daysAgo(time: Date): number {
  if (!time) throw new TypeError('You haven\'t set a time!');
  if (!(time instanceof Date)) throw new TypeError('You have not set a valid date!');
  
  return Math.floor(((new Date()).getTime() - time.getTime()) / 864e5);
}