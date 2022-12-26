import { removeArrayDuplicates } from './RemoveArrayDuplicates';

/**
 * Use this function to see how much one key resembles another.
 * 
 * @param {string} [key] Element you want to search for in an Array.
 * @param {string} [target] Text you want to compare.
 * @returns {number}
 * 
 * @example
 * ```js
 * import { compareStrings } from 'bucky.js';
 * 
 * console.log(compareStrings('foo', 'bar'));
 * ```
 */
export function compareStrings(key: string, target: string): number {
  key = key.replace(/\s+/g, '').toLowerCase();
  target = target.replace(/\s+/g, '').toLowerCase();
  
  if (typeof key !== 'string') throw new TypeError(`The first parameter has to be of type string, received: ${typeof key}`);
  if (typeof target !== 'string') throw new TypeError(`The second parameter has to be of type string, received: ${typeof key}`);
  
  if ((!key.length && !target.length) || (key == target)) return 1;
  if (!key.length || !target.length) return 0;
  
  let stringsArray: string[] = removeArrayDuplicates([...key, ...target]),
    resolveStrings = (str: string): number[] => stringsArray.map(i => str.split('').includes(i) ? 1 : 0),
    
    resolvedStringKey = resolveStrings(key),
    resolvedStringTarget = resolveStrings(target),
    junction = [resolvedStringKey, resolvedStringTarget].map(i => i.filter(Boolean).length);
    
  let [size, keySize, targetSize]: number[] = [0, ...junction];
  for (let index in resolvedStringKey) size += resolvedStringKey[index] * resolvedStringTarget[index];
  return (1.0 * size) / (Math.sqrt(keySize) * Math.sqrt(targetSize));
}