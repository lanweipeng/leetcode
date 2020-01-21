var checkPossibility = function(nums) {
  let res=false
  for(let i=0;i<nums.length;i++){
    // console.log(nums.slice(0,i))
      let arr=[...nums.slice(0,i),...nums.slice(i+1)]
      if(isFeiDijian(arr)===true){
        res=true
        break
      }
  }
  return res
};
function isFeiDijian(arr){
  let res=true
  for(let i=0;i<arr.length;i++){
      if(arr[i]>arr[i+1]){
          res=false
      }
  }
  return res
}
console.log(checkPossibility([4,2,3]))