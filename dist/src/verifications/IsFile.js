'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isFile = void 0;
const node_path_1 = __importDefault(require("node:path"));
const node_fs_1 = require("node:fs");
/**
 * Use this function to check whether it is a file or not.
 *
 * @param {string} [file] File path to be verified.
 * @returns {boolean}
 *
 * @example
 * ```js
 * import { isFile } from 'bucky.js';
 * import path from 'node:path';
 *
 * let file = path.resolve('path', 'to', 'file');
 * console.log(isEmptyFile(file)); // Returns a Boolean value.
 * ```
 */
function isFile(file) {
    try {
        let data = (0, node_fs_1.lstatSync)(node_path_1.default.resolve(file));
        return !!(data === null || data === void 0 ? void 0 : data.isFile());
    }
    catch (_) {
        return false;
    }
}
exports.isFile = isFile;
