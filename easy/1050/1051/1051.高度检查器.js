var heightChecker = function (heights) {
  let copy = heights.slice(0,heights.length)
  copy.sort((a, b) => a - b)
  let count = 0
  for (let i = 0; i < heights.length; i++) {
    console.log(copy[i],heights[i])
    if (copy[i] != heights[i]) count++
  }
  return count
};
console.log(heightChecker([1, 1, 4, 2, 1, 3]))