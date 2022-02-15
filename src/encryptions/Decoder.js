'use strict';

const { createCipheriv, scryptSync } = require('node:crypto');

function Decoder(string, secret, callback) {
  if (typeof string !== 'string') throw new TypeError('Please provide a valid value to encrypt!');
  if (typeof secret !== 'string') throw new TypeError('You didn\'t provide a secret password!');
  secret = scryptSync(secret, 'NBKRS', 32);
  
  let cipher = createCipheriv(
    'aes-256-ctr',
    secret.toString('hex').slice(0, 32),
    secret.toString('hex').slice(0, 16)
  );
  
  cipher = Buffer.concat([
    cipher.update(string, 'hex'),
    cipher.final()
  ]);
  
  if (callback && typeof callback == 'function')
    return callback(cipher.toString());
  else return cipher.toString();
};

module.exports = Decoder;