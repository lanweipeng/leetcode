/**
 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray = function(A) {
  let max=A[0],index=0
  for(let i=0;i<A.length;i++){
    console.log(A[i],max,index)
      if(A[i]>max){
          index=i
      }
  }
  return index
};
console.log(peakIndexInMountainArray([0,2,1,0]))