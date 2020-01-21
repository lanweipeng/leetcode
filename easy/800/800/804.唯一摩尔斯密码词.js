/**
 * @param {string[]} words
 * @return {number}
 */
var morse=[".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]

var uniqueMorseRepresentations = function(words) {
    let wordsStrC=[]
    for(let i=0;i<words.length;i++){
      let arr=words[i].split('')
      let morseStr=''
      for(let j=0;j<arr.length;j++){
        let num=arr[j].charCodeAt()-97
        morseStr+=morse[num]
      }
      wordsStrC[i]=morseStr
    }
    wordsStrC=Array.from(new Set(wordsStrC))
    return wordsStrC.length
};
console.log(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]))