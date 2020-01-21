/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
  let arr = []
  for (let i = left; i <= right; i++) {
    let res = true
    let item=i
    while (item!==0) {
      let index = item % 10
      if (i % index!==0) {
        res = false
        break
      }
      item =Math.floor( item / 10)
    }
    res && arr.push(i)
  }
  return arr
};
console.log(selfDividingNumbers(1, 22))