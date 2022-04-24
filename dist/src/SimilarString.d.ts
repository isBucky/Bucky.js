/**
 * Use this function to find a string similar to another.
 *
 * @example
 * ```js
 * import { similarString } from 'bucky.js';
 *
 * let name = 'bucky',
 *   listNames = ['isBucky', '7Silva', '7ohn'],
 *   search = similarString(name, listNames);
 *
 * console.log(search);
 * ```
 */
declare function similarString(target: string, stringsArray: string[]): Result;
export interface Result {
    ratings: object[];
    result: {
        target: string;
        rating: number;
        index: number;
    } | null;
}
export { similarString };
