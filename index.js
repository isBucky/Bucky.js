'use strict';

module.exports = {
  version: require('./package.json').version,
  
  // Functions:
  compareStrings: require('./src/CompareStrings.js'),
  daysAgo: require('./src/DaysAgo.js'),
  formatSizeUnits: require('./src/FormatSizeUnits.js'),
  ms: require('./src/Ms.js'),
  removeAcents: require('./src/RemoveAcents.js'),
  removeDupleChars: require('./src/RemoveDupleChars.js'),
  shorten: require('./src/Shorten.js'),
  similarString: require('./src/SimilarString.js'),
  timeFormat: require('./src/TimeFormat.js'),
  
  // Generators:
  generateDecimal: require('./src/generators/GenerateDecimal.js'),
  generateHex: require('./src/generators/GenerateHex.js'),
  generatePassword: require('./src/generators/GeneratePassword.js'),
  generateRGB: require('./src/generators/GenerateRGB.js'),
  
  // Verifications:
  isDate: require('./src/verifications/IsDate.js'),
  isEmail: require('./src/verifications/IsEmail.js'),
  isHex: require('./src/verifications/IsHex.js'),
  isURL: require('./src/verifications/IsURL.js'),
  isDirectory: require('./src/verifications/IsDirectory.js'),
  isFile: require('./src/verifications/IsFile.js'),
  isEmptyDirectory: require('./src/verifications/IsEmptyDirectory.js'),
  isEmptyFile: require('./src/verifications/IsEmptyFile.js')
};