/* eslint-disable no-shadow */
const input = [2, 7, 11, 15];
const target = 9;

function twoSumFirstSolution(nums, target) {
  const output = [];
  nums.forEach((testNumber, y) => {
    nums.forEach((changeNumber, z) => {
      if (testNumber + changeNumber === target && y !== z) {
        output.push(z);
      }
    });
  });
  return output;
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

function twoSumSecondSolution(nums, target) {
  const output = {};
  nums.forEach((testNumber, y) => {
    if (target - testNumber in output) {
      return [y, output[target - testNumber]];
    }
    output[testNumber] = y;
  });
  // return output;
}
console.log('result', twoSumFirstSolution(input, target));
console.log('result', twoSumSecondSolution(input, target));
