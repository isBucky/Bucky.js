'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRGB = void 0;
/**
 * Use this function to create a random RGB.
 *
 * This function generates an Array with RGB values:
 * * Array[0]: `Value referring to "Red"`.
 * * Array[1]: `Value referring to "Green"`.
 * * Array[2]: `Value referring to "Blue"`.
 *
 * @returns {number[]}
 * @example
 * ```js
 * import { generateRGB } from 'bucky.js';
 *
 * let [R, G, B] = generateRGB(); // Will generate the random RGB.
 * console.log(R, G, B); // It will return an Array with the RGB values.
 * ```
 */
function generateRGB() {
    return [
        ~~(Math.random() * 255),
        ~~(Math.random() * 255),
        ~~(Math.random() * 255)
    ];
}
exports.generateRGB = generateRGB;
