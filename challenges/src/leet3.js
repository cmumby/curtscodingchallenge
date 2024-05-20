/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
  const subArray = [''];
  let subIndex = 0;
  let longestLength = 0;
  Array.from(s).forEach(c => {
    if (subArray[subIndex].includes(c)) {
      subIndex += 1;
      subArray[subIndex] = '';
    }
    subArray[subIndex] += `${c}`;
    longestLength = subArray[subIndex].length > longestLength ? subArray[subIndex].length : longestLength;
  });

  return longestLength;
}
const s = 'abcabcbb';
lengthOfLongestSubstring(s);
