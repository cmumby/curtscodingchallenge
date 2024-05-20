/* eslint-disable no-unused-vars */
/**
 * @param {string} digits
 * @return {string[]}
 */

function letterCombinations(digits) {
  const firstDigit = digits[0]; // 2
  const otherDigits = digits.split('').slice(1); // [3]
  console.log('other', otherDigits);
  const numberPad = {
    1: [],
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
  };

  let result = [];
  let otherDigit = otherDigits[0];

  if (digits.length > 1) {
    digits.split('').forEach(digit => {
      numberPad[firstDigit].forEach((letter, i) => {
        if (otherDigits && otherDigits.length > 0) {
          numberPad[`${otherDigit}`].forEach((secondLetter, j) => {
            const combo = '';
            if (numberPad[firstDigit].includes(letter)) {
              if (!result.includes(combo)) {
                result.push(combo);
              }
            }
          });
        }

        if (digits[i + i]) otherDigit = digits[i + 1];
      });
    });
  } else if (digits.length === 1) {
    result = numberPad[digits];
  }

  return result;
}
