'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateHex = void 0;
const GenerateRGB_1 = require("./GenerateRGB");
/**
 * A function that generates random hexadecimal.
 * @returns {string}
 *
 * @example
 * ```js
 * import { generateHex } from 'bucky.js';
 *
 * console.log(generateHex()); // Will generate a randomized hex.
 * ```
 */
function generateHex() {
    let [R, G, B] = (0, GenerateRGB_1.generateRGB)();
    return '#' + ((1 << 24) + (R << 16) + (G << 8) + B)
        .toString(16).slice(1);
}
exports.generateHex = generateHex;
