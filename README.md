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
### CapitalizeFirstLetter
> Use this function to capitalize the first letter of a string.

If you want to inspect the code, [click here](./src/Capitalizefirstletter.ts).
~~~javascript
import { capitalizefirstletter } from 'bucky.js';

let myText = 'your text to capitalize.';
console.log(capitalizefirstletter(myText)); // ouptut: Your text to capitalize.
~~~

### CompareStrings
> Use this function to see how much one key resembles another.

If you want to inspect the code, [click here](./src/CompareStrings.ts).
~~~javascript
import { compareStrings } from 'bucky.js';

let result = compareStrings('buc', 'bucky');
console.log(result); // ouptut: 0.7745966692414834
~~~

### DaysAgo
> Use this function to check when days ago has a date.

If you want to inspect the code, [click here](./src/DaysAgo.ts).
~~~javascript
import { daysAgo } from 'bucky.js';

let date = new Date();
  date.setYear(date.getFullYear() - 18); // 2004-06-13T00:50:22.624Z
console.log(daysAgo(date)); // output: 6574
~~~

### FindArrayDuplicates
> Use this function to remove duplicate items from an Array.

If you want to inspect the code, [click here](./src/FindArrayDuplicates.ts).
~~~javascript
import { findArrayDuplicates } from 'bucky.js';

let list = ['bucky', 'silva', 'john', 'bucky'];
console.log(findArrayDuplicates(list)); // output: ['bucky'];
~~~

### FormatSizeUnits
> Use this function to format the byte size.

If you want to inspect the code, [click here](./src/FormatSizeUnits.ts).
~~~javascript
import { formatSizeUnits } from 'bucky.js';

let memoryUsage = process.memoryUsage.rss();
console.log(formatSizeUnits(memoryUsage)); // ouput: 31.60 MB
~~~

### Ms
> Use this function to format milliseconds.

If you want to inspect the code, [click here](./src/Ms.ts).
~~~javascript
import { ms } from 'bucky.js';

console.log(ms(12e5)); // output: {
//  year: 0,
//  month: 0,
//  day: 0,
//  hour: 0,
//  minute: 20,
//  second: 0,
//  milliSecond: 0,
//  microSecond: 0,
//  nanoSecond: 0,
//  abbreviated: '20m'
//}

console.log(ms(12e5, 'en-us')); // output: 20 minutes
~~~

### Pagination
> Used to navigate between values in an Array more easily.

If you want to inspect the code, [click here](./src/Pagination.ts).
~~~javascript
import { Pagination } from 'bucky.js';

let pagination = new Pagination([
  { foo: 'bar', type: 1 },
  { bar: 'foo', type: 2 }
]);

console.log(pagination); // output: Pagination {...}
console.log(pagination.current); // ouput: { foo: 'bar', type: 1 }
console.log(pagination.next()); // output: { foo: 'bar', type: 2 }
console.log(pagination.back()); // ouput: { foo: 'bar', type: 1 }

pagination.add({ foo: 'bar', type: 3 }, { foo: 'bar', type: 4 });
console.log(pagination.pages); // output: [...]
~~~

### RemoveAcents
> Use this function to remove unwanted characters.

If you want to inspect the code, [click here](./src/RemoveAcents.ts).
~~~javascript
import { removeAcents } from 'bucky.js';
console.log(removeAcents('Fõò, Bãr'));
~~~

### RemoveArrayDuplicates
> Use this function to remove repeated strings within an Array.

If you want to inspect the code, [click here](./src/RemoveArrayDuplicates.ts).
~~~javascript
import { removeArrayDuplicates } from 'bucky.js';

let list = ['foo', 'bar', 'foo'];
console.log(removeArrayDuplicates(list)); // output: ['foo', 'bar']
~~~

### RemoveDupleChars
> Use this function to remove repeated letters from a string.

If you want to inspect the code, [click here](./src/RemoveDupleChars.ts).
~~~javascript
import { removeDupleChars } from 'bucky.js';

let text = 'aaaaaaaaa bbbbbbbb';
console.log(removeDupleChars(text)); // output: 'a b'
console.log(removeDupleChars(text, 2)); // output: 'aa bb'
~~~

### Shorten
> Use this function to limit the characters of a text.

If you want to inspect the code, [click here](./src/Shorten.ts).
~~~javascript
import { shorten } from 'bucky.js';

let text = 'your text 297483930293';
console.log(shorten(text, 9)); // output: your text...
~~~

### SimilarString
> Use this function to find a string similar to another.

If you want to inspect the code, [click here](./src/SimilarString.ts).
~~~javascript
import { similarString } from 'bucky.js';

let name = 'bucky',
  listNames = ['isBucky', '7Silva', '7ohn'],
  search = similarString(name, listNames);
  
console.log(search); // output: {
//  ratings: [
//    { target: 'isBucky', rating: 0.8451542547285165, index: 0 },
//    { target: '7Silva', rating: 0, index: 1 },
//    { target: '7ohn', rating: 0, index: 2 }
//  ],
//  result: { target: 'isBucky', rating: 0.8451542547285165, index: 0 }
//}
~~~

### Sleep
> Use this function to create a "sleep", to make the code below run after the given time.

If you want to inspect the code, [click here](./src/Sleep.ts).
~~~javascript
import { sleep } from 'bucky.js';

(async() => {
  console.log('foo');
  await sleep(5000); // Sets the time in milliseconds
  console.log('bar');
})();
~~~