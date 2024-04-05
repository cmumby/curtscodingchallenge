/* eslint-disable no-param-reassign */
/**
 * @param {number} n
 * @return {string[]}
 */

function permute(pairs) {
  let result = [];

  function swapIndecies(bnums, start) {
    if (start === bnums.length) {
      result.push([...bnums]);
      return;
    }

    for (let i = start; i < pairs.length; i += 1) {
      [pairs[start], pairs[i]] = [pairs[i], pairs[start]];
      swapIndecies(pairs, start + 1);
      [pairs[start], pairs[i]] = [pairs[i], pairs[start]];
    }
  }
  swapIndecies(pairs, 0);
  result = result.map(arr => arr.join(''));
  return result;
}

const generateParenthesis = n => {
  let testString = '('.repeat(n);
  testString += ')'.repeat(n);
  const result = [];
  permute(testString.split('')).forEach(permutation => {
    const permutationArray = permutation.split('');
    const balanceArray = [];
    permutationArray.forEach(permChar => {
      if (permChar === '(') {
        balanceArray.push('(');
      } else if (permChar === ')') {
        balanceArray.splice(0, 1);
      }
    });
    if (balanceArray.length === 0 && !result.includes(permutation)) {
      result.push(permutation);
    }
  });
  return result;
};
console.log(generateParenthesis(3));
