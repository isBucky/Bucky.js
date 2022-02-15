'use strict';

const
  path = require('node:path'),
  { lstatSync } = require('node:fs');
  
function IsFile(file) {
  try {
    let data = lstatSync(path.resolve(file));
    return !!data?.isFile();
  } catch(_) { return false; }
}

module.exports = IsFile;