

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
/**
* @param {number[]} nums
* @return {TreeNode}
*/
var sortedArrayToBST = function (nums) {
  // nums = nums.sort((a, b) => a - b)
  // nums = nums.filter(item => item !== null)
  function fn(nums, start, end) {
    if (start == end) {
      return null;
    }
    let mid = Math.floor((end+start)/2)
    let root = new TreeNode(nums[mid]);
    root.left = fn(nums, start, mid);
    root.right = fn(nums, mid + 1, end);
    return root;
  }
  return fn(nums, 0, nums.length)
};
console.log(sortedArrayToBST([-10, -3, 0, 5, 9]))

// console.log(Math.floor((5-0)/2)+0)
// //2
// console.log(Math.floor((5-2)/2)+2)
// console.log(Math.floor((2-0)/2)+0)
// //1
// console.log(Math.floor((1-0)/2)+1)
// console.log(Math.floor((2-1)/2)+1)
// //3
// console.log(Math.floor((2-0)/2)+0)
