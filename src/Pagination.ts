'use strict';

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
  public numberPage: number;
  public readonly pages: any[];
  
  /**
   * @param {any[]} [array] An Array containing any information.
   */
  constructor(array: any[]) {
    if (!Array.isArray(array)) throw new TypeError(`You have not defined a valid Array, received: ${typeof array}`);
    
    this.numberPage = 0;
    this.pages = array.filter(Boolean);
  }
  
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
  public next(position?: number): any {
    if (!this.pages.length) return null;
    
    if (position && (!isNaN(position) || !this.pages[position -1])) return null;
    if (position) position = position -1;
    
    if (!position) position =
      (this.numberPage + 1) < this.pages.length
        ? ++this.numberPage : 0;
      
    this.numberPage = position;
    return this.pages[this.numberPage];
  }
  
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
  public back(position?: number): any {
    if (!this.pages.length) return null;
    
    if (position && (!isNaN(position) || !this.pages[position -1])) return null;
    if (position) position = position -1;
    
    if (!position) position = this.numberPage > 0
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
  public add(...params: any[]): void {
    if (!params.length) throw new TypeError('You haven\'t set any valid values to add!');
    this.pages.push(...params.filter(Boolean));
  }
  
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
  public remove(position: number | string): any {
    return this.pages.splice(
      Math.max(
        Math.min(~~(position), this.pages.length -1),
      0),
    1)[0];
  }
  
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
  public clear(): any[] {
    return this.pages.splice(0);
  }
  
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
  public get current(): any {
    return this.pages[this.numberPage];
  }
}

export { Pagination };