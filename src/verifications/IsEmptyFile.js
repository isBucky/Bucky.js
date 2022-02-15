'use strict';

const
  path = require('node:path'),
  { readFileSync } = require('node:fs');
  
function IsEmptyFile(file) {
  try {
    let data = readFileSync(path.resolve(file), 'utf8');
    return !!!data?.length;
  } catch(_) { return true; }
}

module.exports = IsEmptyFile;