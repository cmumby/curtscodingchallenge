/* eslint-disable no-param-reassign */

/**
 * @param {number} x
 * @return {number}
 */
function reverse(x) {
  const IS_NEGATIVE = x < 0;
  if (IS_NEGATIVE) {
    x = Math.abs(x);
  }
  let numberArray = x.toString().split('');
  let numberLength = x.toString().length;

  numberArray = numberArray.map(digit => {
    digit = numberArray[numberLength - 1];
    numberLength -= 1;
    return digit;
  });

  let reversedNumber = parseInt(numberArray.join(''), 10);

  reversedNumber = IS_NEGATIVE ? reversedNumber - reversedNumber - reversedNumber : reversedNumber;

  return reversedNumber;
}

console.log(reverse(-123));
