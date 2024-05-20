# Generate Parentheses
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

 

## Example 1:

>**Input:** n = 3
>**Output:** ["((()))","(()())","(())()","()(())","()()()"]
## Example 2:

>**Input:** n = 1
>**Output:** ["()"]
 

## Constraints:

`1 <= n <= 8`

## My Answer: 
```javascript
/**
 * @param {number} n
 * @return {string[]}
 */

function permute(pairs) {
  let result = [];

  function swapIndecies(swappedPairs, start) {
    if (start === swappedPairs.length) {
      result.push([...swappedPairs]);
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

function generateParenthesis(n) {
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

```
