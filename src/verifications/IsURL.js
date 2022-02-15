'use strict';

function IsURL(link) {
  if (typeof link !== 'string') return false;
  let res;
  try { res = new URL(link); }
  catch (_) { return false; }
  return !!(res.protocol == 'http:' || res.protocol == 'https:');
}

module.exports = IsURL;