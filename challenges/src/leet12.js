/* eslint-disable no-param-reassign */
/**
 * @param {number} num
 * @return {string}
 */
function intToRoman(num) {
  const symbolMap = {
    _1000: 'M',
    _500: 'D',
    _100: 'C',
    _50: 'L',
    _10: 'X',
    _5: 'V',
    _1: 'I',
  };

  let romanNumeral = '';
  Object.keys(symbolMap).forEach(key => {
    let value = parseInt(key.replace('_', ''), 10);
    let killSwitch = false;

    while (num >= value) {
      switch (true) {
        case num >= 1000:
          romanNumeral += symbolMap._1000;
          break;
        case num >= 900:
          romanNumeral += symbolMap._100 + symbolMap._1000;
          value = 900;
          break;
        case num >= 500:
          romanNumeral += symbolMap._500;
          break;
        case num >= 400:
          romanNumeral += symbolMap._100 + symbolMap._500;
          value = 400;
          break;
        case num >= 100:
          romanNumeral += symbolMap._100;
          break;
        case num >= 90:
          romanNumeral += symbolMap._10 + symbolMap._100;
          value = 90;
          break;
        case num >= 50:
          romanNumeral += symbolMap._50;
          break;
        case num >= 40:
          romanNumeral += symbolMap._10 + symbolMap._50;
          value = 40;
          break;
        case num >= 10:
          romanNumeral += symbolMap._10;
          break;
        case num >= 9:
          romanNumeral += symbolMap._1 + symbolMap._10;
          killSwitch = true;
          break;
        case num >= 5:
          romanNumeral += symbolMap._5;
          break;
        case num >= 4:
          romanNumeral += symbolMap._1 + symbolMap._5;
          killSwitch = true;
          break;
        case num >= 1:
          romanNumeral += symbolMap._1;
          break;

        default:
      }
      num -= killSwitch ? num : parseInt(value, 10);
    }
  });

  return romanNumeral;
}

console.log(intToRoman(1994));
