# 1. Two Sum

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

## Example 1:

> **Input:** nums = [2,7,11,15], target = 9
> **Output:** [0,1]
> Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
## Example 2:

> **Input:** nums = [3,2,4], target = 6
> **Output:** [1,2]
##Example 3:

> Input: nums = [3,3], target = 6
> Output: [0,1]
 

##Constraints:

`2 <= nums.length <= 104`
`-109 <= nums[i] <= 109`
`-109 <= target <= 109`
- **Only one valid answer exists**.

**Follow-up**: Can you come up with an algorithm that is less than O(n2) time complexity?

## My Answer: 
```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const input = [2, 7, 11, 15];
const target = 9;

var twoSum = function (nums, target) {
    const output = []
    nums.forEach((testNumber, y) => {
        nums.forEach((changeNumber, z) => {
            if (testNumber + changeNumber === target && y !== z) {
                output.push(z)
            }
        })
    })
    return output;
    
};

```


## My Answer Follow up
 _(time < O(n2) )_

```javascript

const input = [2, 7, 11, 15];
const target = 9;

const twoSum = function (nums, target) {
    const output = {}
    let result = [];
    nums.some((testNumber, y) => {
       if(target -  testNumber in output){
         result = [y, output[target - testNumber]]
       }
       output[testNumber] = y;
    })
    return result;
};

console.log('result', twoSum(input, target))

```
