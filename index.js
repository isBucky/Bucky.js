'use strict';

module.exports = {
  version: require('./package.json').version,
  
  // Versions:
  capitalizeFirstLetter: require('./src/CapitalizeFirstLetter.js'),
  findArrayDuplicates: require('./src/FindArrayDuplicates.js'),
  removeDupleChars: require('./src/RemoveDupleChars.js'),
  formatSizeUnits: require('./src/FormatSizeUnits.js'),
  compareStrings: require('./src/CompareStrings.js'),
  similarString: require('./src/SimilarString.js'),
  formatNumber: require('./src/FormatNumber.js'),
  removeAcents: require('./src/RemoveAcents.js'),
  timeFormat: require('./src/TimeFormat.js'),
  daysAgo: require('./src/DaysAgo.js'),
  shorten: require('./src/Shorten.js'),
  sleep: require('./src/Sleep.js'),
  ms: require('./src/Ms.js'),
  
  // Generators:
  generatePassword: require('./src/generators/GeneratePassword.js'),
  generateDecimal: require('./src/generators/GenerateDecimal.js'),
  generateHex: require('./src/generators/GenerateHex.js'),
  generateRGB: require('./src/generators/GenerateRGB.js'),
  
  // Verifications:
  isEmptyDirectory: require('./src/verifications/IsEmptyDirectory.js'),
  isDirectory: require('./src/verifications/IsDirectory.js'),
  isEmptyFile: require('./src/verifications/IsEmptyFile.js'),
  isEmail: require('./src/verifications/IsEmail.js'),
  isFile: require('./src/verifications/IsFile.js'),
  isDate: require('./src/verifications/IsDate.js'),
  isHex: require('./src/verifications/IsHex.js'),
  isURL: require('./src/verifications/IsURL.js'),
  
  // Encryptions:
  encoder: require('./src/encryptions/Encoder.js'),
  decoder: require('./src/encryptions/Decoder.js'),
  compare: require('./src/encryptions/Compare.js')
};