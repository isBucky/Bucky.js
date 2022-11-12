/**
 * Used to navigate between values in an Array more easily.
 *
 * @example
 * ```js
 * import { Pagination } from 'bucky.js';
 *
 * let pagination = new Pagination([
 *  { foo: 'bar', type: 1 },
 *  { bar: 'foo', type: 2 }
 * ]);
 *
 * console.log(pagination);
 * ```
 */
declare class Pagination {
    numberPage: number;
    readonly pages: any[];
    /**
     * @param {any[]} [array] An Array containing any information.
     */
    constructor(array: any[]);
    /**
     * Use this function to jump to the next page.
     *
     * @param {number?} [position] Position of the page you want to jump to.
     * @returns {any}
     *
     * @example
     * ```js
     * Pagination.next();
     *
     * // Jump to specific page:
     * Pagination.next(2);
     * ```
     */
    next(position?: number): any;
    /**
     * Use this function to go back one page.
     *
     * @param {number?} [position] Position of the page you want to go back to.
     * @returns {any}
     *
     * @example
     * ```js
     * Pagination.back();
     *
     * // You can go back to a specific page:
     * Pagination.back(1);
     * ```
     */
    back(position?: number): any;
    /**
     * Use this function to add more values to Array.
     *
     * @example
     * ```js
     * // Adding a single value:
     * Pagination.add('foo');
     *
     * // Adding more than one value:
     * Pagination.add('foo', ['bar'], {key: 'value'});
     * ```
     */
    add(...params: any[]): void;
    /**
     * Use this function to remove a specific value from the Array.
     *
     * @param {number | string} [position] Position of the page you want to remove.
     * @returns {any}
     *
     * @example
     * ```js
     * // Removing a value at position 2:
     * Pagination.remove(2);
     * ```
     */
    remove(position: number | string): any;
    /**
     * Use está função para limpar todos os valores da Array.
     *
     * @returns {any[]}
     *
     * @example
     * ```js
     * Pagination.clear();
     * ```
     */
    clear(): any[];
    /**
     * This getter will show the current Array page.
     *
     * @returns {any}
     *
     * @example
     * ```js
     * Pagination.current;
     * ```
     */
    get current(): any;
}
export { Pagination };
