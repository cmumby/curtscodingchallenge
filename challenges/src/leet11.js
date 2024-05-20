/**
 * @param {number[]} height
 * @return {number}
 */
function maxArea(height) {
  let largestArea = 0;
  height.forEach((h, i) => {
    for (let j = i + 1; j < height.length; j += 1) {
      const currentPosition = i;
      const targetPosition = j;
      const currentHeight = height[i];
      const targetHeight = height[j];
      const shortestHeight = targetHeight < currentHeight ? targetHeight : currentHeight;
      const area = (targetPosition - currentPosition) * shortestHeight;
      largestArea = area > largestArea ? area : largestArea;
    }
  });

  return largestArea;
}

console.log(maxArea([1, 1]));
