'use strict';

import { isDate } from 'node:util';

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
export function ms(time: number | Date): ResultMs {
  if (time instanceof Date) time = time?.getTime();
  
  if (!time) throw new TypeError(`You have not set a valid time in milliseconds, received: ${typeof time}`);
  if (isNaN(time)) throw new TypeError(`Time must be of type String, received: ${typeof time}`);
  
  let
    parse = time > 0 ? Math.floor : Math.ceil,
    
    year = ~~(parse(time / 315576e6)),
    month = ~~((parse(time / 2592e6) % 12)),
    day = ~~((parse(time / 864e5) % 30)),
    
    hour = ~~((parse(time / 36e5) % 24)),
    minute = ~~((parse(time / 6e4) % 60)),
    second = ~~((parse(time / 1e3) % 60)),
    
    millisecond = ~~((parse(time) % 1e3)),
    microsecond = ~~((parse(time * 1e3) % 1e3)),
    nanosecond = ~~((parse(time * 1e6) % 1e3));
    
  
  let abbreviated = [
    (year ? `${year}y` : null), (month ? `${month}ms` : null),
    (day ? `${day}d` : null), (hour ? `${hour}h` : null),
    (minute ? `${minute}m` : null), (second ? `${second}s` : null)
  ].filter(Boolean).join(', ');
  abbreviated = abbreviated.length > 0 ? abbreviated : '0s';
  
  return {
    year, month, day,
    hour, minute, second,
    millisecond, microsecond,
    nanosecond, abbreviated
  };
}

export interface ResultMs {
  year: number,
  month: number,
  day: number,
  hour: number,
  minute: number,
  second: number,
  millisecond: number,
  microsecond: number,
  nanosecond: number,
  abbreviated: string;
}