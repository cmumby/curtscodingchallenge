/* eslint-disable no-param-reassign */
function permute(numbers) {
  let result = [];

  function swapIndecies(bnums, start) {
    if (start === bnums.length) {
      result.push([...bnums]);
      return;
    }

    for (let i = start; i < numbers.length; i += 1) {
      [numbers[start], numbers[i]] = [numbers[i], numbers[start]];
      swapIndecies(numbers, start + 1);
      [numbers[start], numbers[i]] = [numbers[i], numbers[start]];
    }
  }
  swapIndecies(numbers, 0);
  result = result.map(arr => arr.join(''));
  return result;
}

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
const findSubstring = (s, words) => {
  const substringArray = permute(words);
  const startingIndecies = [];
  substringArray.forEach(substring => {
    if (s.indexOf(substring) >= 0) {
      startingIndecies.push(s.indexOf(substring));
    }
  });

  return startingIndecies;
};

console.log('result', findSubstring('barfoofoobarthefoobarman', ['bar', 'foo', 'the']));
