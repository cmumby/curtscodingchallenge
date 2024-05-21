var searchRange = function (nums, target) {
  let indexes = [],
    i = -1;
  let step = 0;
  let targetFound = false;
  const numLen = nums.length;
  while (step <= numLen) {
    i = nums.indexOf(target, i + 1);
    if (targetFound === true && i === -1) break;
    else if (indexes[0] === -1 && indexes[1] === -1) break;
    else if (nums.length === 0) {
      indexes = [-1, -1];
      break;
    }
    if (i > -1) targetFound = true;
    indexes.push(i);
    step++;
  }
  return indexes;
};
