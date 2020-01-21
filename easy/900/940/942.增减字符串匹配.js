var diStringMatch = function(S) {
  let res=[],init=[]
  for(let i=0;i<=S.length;i++){
      init.push(i)
  }
  let StoArr=S.split('')
  for(let i=0;i<StoArr.length;i++){
      if(StoArr[i]=='I') res.push(init.shift())
      if(StoArr[i]=='D') res.push(init.pop())
  }
  res.push(init.pop())
  return res
};
console.log(diStringMatch("IDID"))