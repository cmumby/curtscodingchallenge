/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
function findMedianSortedArrays(nums1, nums2) {
  let median;
  const mergedAndSortedArray = nums1.concat(nums2).sort();
  const midpoint = mergedAndSortedArray.length / 2;
  const MEDIAN_POSITION = Math.floor(Math.ceil(midpoint)) - 1;
  const AFTER_MEDIAN = MEDIAN_POSITION + 1;

  if (mergedAndSortedArray.length % 2 !== 0) {
    median = mergedAndSortedArray[MEDIAN_POSITION];
  } else {
    median = (mergedAndSortedArray[MEDIAN_POSITION] + mergedAndSortedArray[AFTER_MEDIAN]) / 2;
  }
  return median;
}

console.log(findMedianSortedArrays([1, 2], [3, 4]));
