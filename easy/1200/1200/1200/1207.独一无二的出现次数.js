/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
  let obj={}
  arr.forEach(key=>{
      if(obj[key]){
          obj[key]++
      }else{
          obj[key]=1
      }
  })
  let values = []
  Object.keys(obj).forEach(key=>{
    values.push(obj[key])
  })
  let unique = Array.from(new Set(values))
  return values.length === unique.length
};
uniqueOccurrences([1,2])