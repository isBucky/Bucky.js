'use strict';

const
  path = require('node:path'),
  { lstatSync } = require('node:fs');
  
function IsDirectory(dir) {
  try {
    let data = lstatSync(path.resolve(dir));
    return !!data?.isDirectory();
  } catch(_) { return false; }
}

module.exports = IsDirectory;