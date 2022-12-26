/**
 * Use this function to format milliseconds.
 *
 * @param {number | Date} [time] Time you want to transform.
 * @param {string?} [formatted] Use to format milliseconds in full.
 * @returns {object}
 *
 * @example
 * ```js
 * import { ms } from 'bucky.js';
 *
 * console.log(15e3);
 * // output:
 * //{
 * //   year: 0,
 * //   month: 0,
 * //   day: 0,
 * //   hour: 0,
 * //   minute: 0,
 * //   second: 15,
 * //   millisecond: 0,
 * //   microsecond: 0,
 * //   nanosecond: 0,
 * //   abbreviated: '15s'
 * // }
 * ```
 */
export declare function ms(time: number | Date): ResultMs;
export interface ResultMs {
    year: number;
    month: number;
    day: number;
    hour: number;
    minute: number;
    second: number;
    millisecond: number;
    microsecond: number;
    nanosecond: number;
    abbreviated: string;
}
