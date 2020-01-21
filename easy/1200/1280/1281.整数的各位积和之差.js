
      function subtractProductAndSum( n) {
          let arr = n.toString().split('')
          console.log(arr)
        arr=  arr.map(item=>parseInt(item))
          let ji=1,he=0
          arr.forEach(item=>{
            console.log(typeof item)
              ji*=item
              he+=item
          })
          console.log(ji,he)
          return  Math.abs(ji-he)
      }
      subtractProductAndSum(234)