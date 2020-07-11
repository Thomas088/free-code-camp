function chunkArrayInGroups(arr, size) {
  
  let finalArray = []
  let toPush;
  let toSplice;
  
  for (let i = 0; i <= arr.length; i++) {
     toPush = arr.slice(0, size)
     finalArray.push(toPush)
     toSplice = arr.splice(0, size)
    // Pour la derniere valeur
     if(arr.length === 1) {
     toPush = arr.slice(0, size)
     finalArray.push(toPush)
     }
 } 
  return finalArray
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)