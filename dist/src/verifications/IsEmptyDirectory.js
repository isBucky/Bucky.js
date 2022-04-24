'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmptyDirectory = void 0;
const node_path_1 = __importDefault(require("node:path"));
const node_fs_1 = require("node:fs");
/**
 * Use this function to check if a directory is empty.
 *
 * @example
 * ```js
 * import { isEmptyDirectory } from 'bucky.js';
 *
 * console.log(isEmptyDirectory('/path/to/directory/'));
 * ```
 */
function isEmptyDirectory(dir) {
    try {
        let data = (0, node_fs_1.readdirSync)(node_path_1.default.resolve(dir));
        return !!!(data === null || data === void 0 ? void 0 : data.length);
    }
    catch (_) {
        return true;
    }
}
exports.isEmptyDirectory = isEmptyDirectory;
