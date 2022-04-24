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

let [R, G, B] = generateRGB(); // Will generate the random RGB.
console.log(R, G, B); // It will return an Array with the RGB values.
~~~

## Verifications
### IsDirectory
> Use to check if a directory exists.

If you want to inspect the code, [click here](./src/verifications/IsDirectory.ts).
~~~javascript
import { isDirectory } from 'bucky.js';
import path from 'node:path';

let directory = isDirectory(path.resolve('path', 'to', 'directory'));
console.log(directory); // Returns a Boolean value.
~~~

### IsEmail
> 

If you want to inspect the code, [click here](./src/verifications/.ts).
~~~javascript
import {} from 'bucky.js';
~~~

### IsEmptyDirectory
> 

If you want to inspect the code, [click here](./src/verifications/.ts).
~~~javascript
import {} from 'bucky.js';
~~~

### IsEmptyFile
> 

If you want to inspect the code, [click here](./src/verifications/.ts).
~~~javascript
import {} from 'bucky.js';
~~~

### IsFile
> 

If you want to inspect the code, [click here](./src/verifications/.ts).
~~~javascript
import {} from 'bucky.js';
~~~

### IsHex
> 

If you want to inspect the code, [click here](./src/verifications/.ts).
~~~javascript
import {} from 'bucky.js';
~~~

### IsURL
> 

If you want to inspect the code, [click here](./src/verifications/.ts).
~~~javascript
import {} from 'bucky.js';
~~~

## Other functions