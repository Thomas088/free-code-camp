function getIndexToIns(arr, num) {
  
  //For Empty Array
  if (arr.length === 0) {
    return 0;
  }

  // Sort Array
  function compare(a, b) {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    if (a === b) {
      return 0;
    }
  }
   arr.sort(compare)

  // Round Up
  let roundUp = (num, precision) => {
    num = parseFloat(num);
    if (!precision) return num;
      return Math.round(num / precision) * precision ;
  }

  // To Index
  let nearestIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (num === arr[i]) {
      return arr.indexOf(arr[i]);
    } else if (roundUp(num, 10) !== arr[i]) {
      arr.push(roundUp(num, 10))
      arr.sort(compare)
    } else if (roundUp(num, 10) === arr[i]) {
      nearestIndex = arr[i];
    } 
  }
  // Result
  return arr.indexOf(nearestIndex);
}

getIndexToIns([40, 60], 50)
