function mutation(arr) {  
  
  let totalWords = 0;
  const toCheck =  arr[0].toLowerCase()
  const entry = arr[1].toLowerCase()
  
  for (let i = 0, j = entry.length; i < j; i++) {  
     if(toCheck.includes(entry[i])) {
           totalWords++
     } 
  }
  return totalWords >= entry.length
}