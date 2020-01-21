/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let result=x^y
    let count=0
    while(result){
      if(result%2){
        count++
      }
      result=Math.floor(result/2)
    }
    return count
};
console.log(hammingDistance(1,4))
module.exports=hammingDistance