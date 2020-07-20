function smallestCommons(arr) {
  
  let lcm = 0 
  let arrayToTest = []

  for(let i = Math.min.apply(null, arr); i <= Math.max.apply(null, arr); i++){
    arrayToTest.push(i)
  }

  const isDivisibleByAll = (arr, value) => arr.every(num => value % num === 0)
  
  do {
    lcm++ 
  } while (!isDivisibleByAll(arrayToTest, lcm))
    
 return lcm
}

smallestCommons([1,5])
