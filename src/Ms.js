'use strict';

const isDate = require('./verifications/IsDate.js');

module.exports = function Ms(time, formatted) {
  if (isDate(time)) {
    time = new Date(time);
    if (time == 'Invalid Date') time = null;
    else time = time?.getTime();
  }
  if (!time) throw new TypeError('You have not set a valid time!');
  
  const
    parse = time > 0 ? Math.floor : Math.ceil,
    ms = {
      year: parse(time / 31557600000),
      month: parse(time / 2592000000) % 12,
      day: parse(time / 86400000) % 30,
      hour: parse(time / 3600000) % 24,
      minute: parse(time / 60000) % 60,
      second: parse(time / 1000) % 60,
      milliSecond: parse(time) % 1000,
      microSecond: parse(time * 1000) % 1000,
      nanoSecond: parse(time * 1e6) % 1000
    };
    
  if (formatted) {
    if (!['pt-br', 'en'].includes(formatted)) throw new TypeError();
    
    let
      lang = formatted.toLowerCase(),
      langs = {
        'pt-br': [
          [' anos', ' ano'],
          [' meses', ' mês'],
          [' dias', ' dia'],
          [' horas', ' hora'],
          [' minutos', ' minuto'],
          [' segundos', ' segundo']
        ],
        'en': [
          [' years', ' year'],
          [' months', ' month'],
          [' days', ' day'],
          [' hours', ' hour'],
          [' minutes', ' minute'],
          [' seconds', ' second']
        ]
      };
      
    return [
      (ms.year ? ms.year + (ms.year > 1 ? langs[lang][0][0] : langs[lang][0][1]) : null),
      (ms.month ? ms.month + (ms.month > 1 ? langs[lang][1][0] : langs[lang][1][1]) : null),
      (ms.day ? ms.day + (ms.day > 1 ? langs[lang][2][0] : langs[lang][2][1]) : null),
      (ms.hour ? ms.hour + (ms.hour > 1 ? langs[lang][3][0] : langs[lang][3][1]) : null),
      (ms.minute ? ms.minute + (ms.minute > 1 ? langs[lang][4][0] : langs[lang][4][1]) : null),
      (ms.second ? ms.second + (ms.second > 1 ? langs[lang][5][0] : langs[lang][5][1]) : null)
    ].filter(Boolean).join(', ') ?? '0' + langs[lang][5][1];
  }
  
  let abbreviated = [
    (ms.year ? `${ms.year}y` : null),
    (ms.month ? `${ms.month}ms` : null),
    (ms.day ? `${ms.day}d` : null),
    (ms.hour ? `${ms.hour}h` : null),
    (ms.minute ? `${ms.minute}m` : null),
    (ms.second ? `${ms.second}s` : null)
  ].filter(Boolean).join(', ') ?? '0s';
  
  return Object.assign(ms, { abbreviated });
};