var findComplement = function(num) {
  let n=num
  let count=0
  while(n){
count++
n=Math.floor(n/2)
  }
  return num^(2**count-1)
};
console.log(findComplement(-1))