var buddyStrings = function(A, B) {
  for(let i=0;i<A.length;i++){
      for(let j=1;j<A.length;j++){
        let front=A.substr(i,j),end=(A.substr(j+1))
      console.log(front,end)
      if(end+front===B){
          return true
      }
      }
  }
  return false
};
console.log(buddyStrings("aaaaaaabc",'aaaaaaacb'))