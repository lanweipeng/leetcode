/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
  let x=0,y=0
  for(item of moves){
    console.log(item)
      switch(item){
        
          case 'U':
          y++
          break
          case 'D':
          y--
          break
          case 'L':
          x--
          break
          case 'R':
          x++
          break
      }
  }
  return x===0&&y===0
};
console.log(judgeCircle('UD'))