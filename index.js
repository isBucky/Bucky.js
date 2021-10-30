'use strict';

module.exports = {
  version: require('./package.json').version,
  
  // Others:
  sleep: require('./src/others/Sleep.js'),
  
  // Formats Dates:
  ms: require('./src/formatDates/Ms.js'),
  daysAgo: require('./src/formatDates/DaysAgo.js'),
  timeFormat: require('./src/TimeFormat.js'),
  
  // Formats:
  compareStrings: require('./src/formats/CompareStrings.js'),
  formatSizeUnits: require('./src/formats/FormatSizeUnits.js'),
  removeAcents: require('./src/formats/RemoveAcents.js'),
  removeDupleChars: require('./src/formats/RemoveDupleChars.js'),
  shorten: require('./src/formats/Shorten.js'),
  similarString: require('./src/formats/SimilarString.js'),
  findArrayDuplicates: require('./src/formats/FindArrayDuplicates.js'),
  formatNumber: require('./src/formats/FormatNumber.js'),
  capitalizeFirstLetter: require('./src/formats/CapitalizeFirstLetter.js'),
  
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
  isEmptyFile: require('./src/verifications/IsEmptyFile.js'),
  
  // Encryptions:
  encoder: require('./src/encryptions/Encoder.js'),
  decoder: require('./src/encryptions/Decoder.js'),
  compare: require('./src/encryptions/Compare.js')
};