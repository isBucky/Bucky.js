'use strict';

/**
 * Use this function to remove unwanted characters.
 * 
 * @param {string} [text] Text you want to remove characters from.
 * @returns {string}
 * 
 * @example
 * ```js
 * import { removeAcents } from 'bucky.js';
 * 
 * console.log(removeAcents('Fõò, Bãr'));
 * ```
 */
function removeAcents(text: string): string {
  if (typeof text !== 'string') throw new TypeError('You have not defined a valid string!');
  return String(text)
    .replace(new RegExp('[ÀÁÂÃÄÅÆĀĂĄ]', 'gi'), 'a')
    .replace(new RegExp('[ÈÉÊËĒĖĘĚĔƏ]', 'gi'), 'e')
    .replace(new RegExp('[ÒÓÔÕŒŐØÖ]', 'gi'), 'o')
    .replace(new RegExp('[ÙÚÛÜŲŰŮŪ]', 'gi'), 'u')
    .replace(new RegExp('[ÌÍÎÏİĮĪ]', 'gi'), 'i')
    .replace(new RegExp('[ĹĻĽŁ]', 'gi'), 'l')
    .replace(new RegExp('[ŇŅŃÑ]', 'gi'), 'n')
    .replace(new RegExp('[ŹŻŽ]', 'gi'), 'z')
    .replace(new RegExp('[ŚŠŞ]', 'gi'), 's')
    .replace(new RegExp('[ŤȚŢ]', 'gi'), 't')
    .replace(new RegExp('[ČĆÇ]', 'gi'), 'c')
    .replace(new RegExp('[ŔŘ]', 'gi'), 'r')
    .replace(new RegExp('[ĎĐ]', 'gi'), 'd')
    .replace(new RegExp('[ĢĞ]', 'gi'), 'g')
    .replace(new RegExp('[Ķ]', 'gi'), 'k')
    .replace(new RegExp('[Ý]', 'gi'), 'y');
};

export { removeAcents };