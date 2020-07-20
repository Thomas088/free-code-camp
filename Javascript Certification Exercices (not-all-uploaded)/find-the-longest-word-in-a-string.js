function findLongestWordLength(str) {
  
  const splited = str.split(" ")
  let longestWord = 0
  
   for (let i = 0; i < splited.length; i++) { 
     if (splited[i].length > longestWord) {
       longestWord = splited[i].length
     }
   }
  
  return longestWord
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
