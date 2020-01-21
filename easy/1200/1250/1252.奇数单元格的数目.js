var oddCells = function (n, m, indices) {
  let odd=0
  let arr=new Array(n)
  for(let i=0;i<n;i++){
    arr[i]=new Array(m).fill(0)

  }
  for(let x=0;x<indices.length;x++){
    let r=indices[x][0],d=indices[x][1]
    for(let i=0;i<m;i++) arr[r][i]++
    for(let i=0;i<n;i++) arr[i][d]++
  }
  for(let i=0;i<n;i++){
    for(let j=0;j<m;j++){
      if(arr[i][j]%2!==0){
        odd++
      }
    }
  }
  return odd
};
module.exports = oddCells