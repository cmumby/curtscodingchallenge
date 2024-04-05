# Longest Substring Without Repeating Characters

Given a string s, find the length of the **longest substring** without repeating characters.

 

## Example 1:

>**Input**: s = "abcabcbb"
**Output**: 3
**Explanation**: The answer is "abc", with the length of 3.

## Example 2:

>Input: s = "bbbbb"
**Output1**: 1
**Explanation**: The answer is "b", with the length of 1.

## Example 3:

>Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

# Constraints:

`0 <= s.length <= 5 * 104`
`s consists of English letters, digits, symbols and spaces.`


## My Answer: 
```javascript
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let subArray = [''];
    let subIndex = 0;
    let longestLength = 0;
    Array.from(s).forEach((c) => {
        if(subArray[subIndex].includes(c)){
            subIndex++;
            subArray[subIndex] = '';
        }
        subArray[subIndex] += `${c}`;
        longestLength = subArray[subIndex].length > longestLength? subArray[subIndex].length: longestLength;
    });
    return longestLength;
};

```