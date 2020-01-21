var minTimeToVisitAllPoints = function(points) {
    let n=points.length
    if(n===1){
      return 0
    }
    let sum=0
    for(let i=1;i<n;i++){
      let x=Math.abs(points[i][0]-points[i-1][0])
      let y=Math.abs(points[i][1]-points[i-1][1])
      sum+=x>=y?x:y
    }
    return sum
};
module.exports = minTimeToVisitAllPoints;