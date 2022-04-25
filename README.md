<div align="center">
  <h1>Bucky.js</h1>
  <p>
    <a href="https://www.npmjs.com/package/bucky.js"><img src="https://img.shields.io/npm/v/bucky.js?style=flat-square&maxAge=3600" alt="NPM version" /></a>
    <a href="https://www.npmjs.com/package/bucky.js"><img src="https://img.shields.io/npm/dt/bucky.js?style=flat-square&maxAge=3600" alt="NPM downloads" /></a>
    <a href="https://www.npmjs.com/package/bucky.js"><img src="https://img.shields.io/github/languages/code-size/isBucky/Bucky.js?style=flat-square&maxAge=3600" alt="NPM size" /></a>
    <a href="https://www.npmjs.com/package/bucky.js"><img src="https://img.shields.io/npm/l/bucky.js?style=flat-square&maxAge=3600" alt="NPM license" /></a>
  </p>
  <p><a href="https://www.npmjs.com/package/bucky.js"><img src="https://nodei.co/npm/bucky.js.png?downloads=true&stars=true" alt="NPM Banner"></a></p>
  <p><strong>Simple npm that has several functions to use in everyday development.</strong></p>
</div>

---

# Table of contents
- [Installation](#installation)
- [Functions](#functions)
  - [Generators](#generators)
    - [GenerateDecimal](#generatedecimal)
    - [GenerateHex](generatehex)
    - [GeneratePassword](generatepassword)
    - [GenerateRGB](generatergb)
  - [Verifications](#verifications)
    - [IsDirectory](#isdirectory)
    - [IsEmail](#isemail)
    - [IsEmptyDirectory](#isemptydirectory)
    - [IsEmptyFile](#isemptyfile)
    - [IsFile](#isfile)
    - [IsHex](#ishex)
    - [IsURL](#isurl)
  - [Other functions](#other-functions)
    - [CapitalizeFirstLetter](#capitalizefirstletter)
    - [CompareStrings](#comparestrings)
    - [DaysAgo](#daysago)
    - [FindArrayDuplicates](#findarrayduplicates)
    - [FormatSizeUnits](#formatsizeunits)
    - [Ms](#ms)
    - [Pagination](#pagination)
    - [RemoveAcents](#removeacents)
    - [RemoveArrayDuplicates](#removearrayduplicates)
    - [RemoveDupleChars](#removeduplechars)
    - [Shorten](#shorten)
    - [SimilarString](#similarstring)
    - [Sleep](#sleep)

# Installation
> Your Node.js must be version 16.6.0 or higher!

~~~sh
# Using npm:
npm install bucky.js --save

# Using yarn:
yarn add bucky.js
~~~

# Functions
## Generators
### GenerateDecimal
> A function that will generate random decimals.

If you want to inspect the code, [click here](./src/generators/GenerateDecimal.ts).
~~~javascript
import { generateDecimal } from 'bucky.js';

console.log(generateDecimal()); // It will generate a randomized decimal.
~~~

### GenerateHex
> A function that generates random hexadecimal.

If you want to inspect the code, [click here](./src/generators/GenerateHex.ts).
~~~javascript
import { generateHex } from 'bucky.js';

console.log(generateHex()); // Will generate a randomized hex.
~~~

### GeneratePassword
> This function will generate a password with the number of characters you define in the parameters.

If you want to inspect the code, [click here](./src/generators/GenerateHex.ts).
~~~javascript
import { generatePassword } from 'bucky.js';

let password = generatePassword(15); // 15 characters
console.log(password);
~~~

### GenerateRGB
> Use this function to create a random RGB.

If you want to inspect the code, [click here](./src/generators/GenerateRGB.ts).
~~~javascript
import { generateRGB } from 'bucky.js';

let myRGB = generateRGB(); // Will generate the random RGB.
console.log(myRGB); // It will return an Array with the RGB values.
~~~

## Verifications
### IsDirectory
> Use to check if a directory exists.

If you want to inspect the code, [click here](./src/verifications/IsDirectory.ts).
~~~javascript
import { isDirectory } from 'bucky.js';
import path from 'node:path';

let directory = path.resolve('path', 'to', 'directory');
console.log(isDirectory(directory)); // Returns a Boolean value.
~~~

### IsEmail
> Use this function to verify valid emails.

If you want to inspect the code, [click here](./src/verifications/IsEmail.ts).
~~~javascript
import { isEmail } from 'bucky.js';

let myEmail = 'your.email@yourdomain.com';
console.log(isEmail(myEmail)); // Returns a Boolean value.
~~~

### IsEmptyDirectory
> Use this function to check if a directory is empty.

If you want to inspect the code, [click here](./src/verifications/IsEmptyDirectory.ts).
~~~javascript
import { isEmptyDirectory } from 'bucky.js';
import path from 'node:path';

let directory = path.resolve('path', 'to', 'directory');
console.log(isEmptyDirectory(directory)); // Returns a Boolean value.
~~~

### IsEmptyFile
> Use this function to check if a file is empty.

If you want to inspect the code, [click here](./src/verifications/IsEmptyFile.ts).
~~~javascript
import { isEmptyFile } from 'bucky.js';
import path from 'node:path';

let file = path.resolve('path', 'to', 'file');
console.log(isEmptyFile(file)); // Returns a Boolean value.
~~~

### IsFile
> Use this function to check whether it is a file or not.

If you want to inspect the code, [click here](./src/verifications/IsFile.ts).
~~~javascript
import { isFile } from 'bucky.js';
import path from 'node:path';

let file = path.resolve('path', 'to', 'file');
console.log(isEmptyFile(file)); // Returns a Boolean value.
~~~

### IsHex
> Use this function to check whether a hex or not.

If you want to inspect the code, [click here](./src/verifications/IsHex.ts).
~~~javascript
import { isHex } from 'bucky.js';

console.log(isHex('#FFA500')); // Returns a Boolean value.
~~~

### IsURL
> Use this function to check if it's a URL.

If you want to inspect the code, [click here](./src/verifications/IsURL.ts).
~~~javascript
import { isURL } from 'bucky.js';

let url = 'https://www.npmjs.com/package/bucky.js';
console.log(isURL(url));  // Returns a Boolean value.
~~~

## Other functions