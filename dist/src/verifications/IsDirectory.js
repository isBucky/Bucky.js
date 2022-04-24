'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDirectory = void 0;
const node_path_1 = __importDefault(require("node:path"));
const node_fs_1 = require("node:fs");
/**
 * Use to check if a directory exists.
 *
 * @example
 * ```js
 * import { isDirectory } from 'bucky.js';
 *
 * console.log(isDirectory('/path/to/directory/'));
 * ```
 */
function isDirectory(dir) {
    try {
        let data = (0, node_fs_1.lstatSync)(node_path_1.default.resolve(dir));
        return !!(data === null || data === void 0 ? void 0 : data.isDirectory());
    }
    catch (_) {
        return false;
    }
}
exports.isDirectory = isDirectory;
