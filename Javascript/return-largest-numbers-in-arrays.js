function largestOfFour(arr) {
  
  let largest = []

  for(let i = 0; i < arr.length; i++) {
    let max = Math.max.apply(null, arr[i])
    largest.push(max)
 }
  return largest;
} 
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
