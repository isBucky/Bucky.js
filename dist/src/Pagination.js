'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pagination = void 0;
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
class Pagination {
    constructor(array) {
        if (!Array.isArray(array))
            throw new TypeError(`You have not defined a valid Array, received: ${typeof array}`);
        this.numberPage = 0;
        this.pages = array.filter(Boolean);
    }
    /**
     * Use this function to jump to the next page.
     *
     * @example
     * ```js
     * Pagination.next();
     *
     * // Jump to specific page:
     * Pagination.next(2);
     * ```
     */
    next(position) {
        if (!this.pages.length)
            return null;
        if (position && (!isNaN(position) || !this.pages[position - 1]))
            return null;
        if (position)
            position = position - 1;
        if (!position)
            position =
                (this.numberPage + 1) < this.pages.length
                    ? ++this.numberPage : 0;
        this.numberPage = position;
        return this.pages[this.numberPage];
    }
    /**
     * Use this function to go back one page.
     *
     * @example
     * ```js
     * Pagination.back();
     *
     * // You can go back to a specific page:
     * Pagination.back(1);
     * ```
     */
    back(position) {
        if (!this.pages.length)
            return null;
        if (position && (!isNaN(position) || !this.pages[position - 1]))
            return null;
        if (position)
            position = position - 1;
        if (!position)
            position = this.numberPage > 0
                ? --this.numberPage
                : this.pages.length - 1;
        this.numberPage = position;
        return this.pages[this.numberPage];
    }
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
    add(...params) {
        if (!params.length)
            throw new TypeError('You haven\'t set any valid values to add!');
        this.pages.push(...params.filter(Boolean));
    }
    /**
     * Use this function to remove a specific value from the Array.
     *
     * @example
     * ```js
     * // Removing a value at position 2:
     * Pagination.remove(2);
     * ```
     */
    remove(position) {
        return this.pages.splice(Math.max(Math.min(~~(position), this.pages.length - 1), 0), 1)[0];
    }
    /**
     * Use está função para limpar todos os valores da Array.
     *
     * @example
     * ```js
     * Pagination.clear();
     * ```
     */
    clear() {
        return this.pages.splice(0);
    }
    /**
     * This getter will show the current Array page.
     *
     * @example
     * ```js
     * Pagination.current;
     * ```
     */
    get current() {
        return this.pages[this.numberPage];
    }
}
exports.Pagination = Pagination;
