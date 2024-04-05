/* eslint-disable no-param-reassign */

/**
 * @param {number} number
 * @return {boolean}
 */
function isPalindrome(number) {
  let numberArray = number.toString().split('');
  let numberLength = number.toString().length;

  numberArray = numberArray.map(digit => {
    digit = numberArray[numberLength - 1];
    numberLength -= 1;
    return digit;
  });

  const reversedNumber = parseInt(numberArray.join(''), 10);

  return reversedNumber === number;
}

/**
 * @param {number} number
 * @return {boolean}
 */
function isPalindromeMath(number) {
  const original = number;
  let reverse = 0;
  while (number > 0) {
    const lastDigit = number % 10;
    reverse = reverse * 10 + lastDigit;
    number = Math.round(number / 10);
  }
  return original === reverse;
}

console.log(isPalindrome(12344321));
console.log(isPalindromeMath(12344321));
