'use strict';

class Pagination {
  constructor(array) {
    if (!Array.isArray(Array)) throw new TypeError('You haven\'t defined a valid array!');
    this.numberPage = 0; this.pages = array;
  }
  
  next() {
    this.numberPage = this.numberPage + 1 < this.pages.length ?
      ++this.numberPage : 0;
    return this.pages[this.numberPage];
  }
  
  back() {
    this.numberPage = this.numberPage > 0 ?
      --this.numberPage : this.pages.length - 1;
    return this.pages[this.numberPage];
  }
  
  get page() {
    return this.pages[this.numberPage];
  }
}

module.exports = Pagination;