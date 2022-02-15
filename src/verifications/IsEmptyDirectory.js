'use strict';

const
  path = require('node:path'),
  { readdirSync } = require('node:fs');
  
function IsEmptyDirectory(dir) {
  try {
    let data = readdirSync(path.resolve(dir));
    return !!!data?.length;
  } catch(_) { return true; }
}

module.exports = IsEmptyDirectory;