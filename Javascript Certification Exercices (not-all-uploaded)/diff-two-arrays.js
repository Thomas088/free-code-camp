function diffArray(arr1, arr2) {

   let concat = arr1.concat(arr2);
   let filtered = concat.filter(value => !(concat.indexOf(value) !== concat.lastIndexOf(value)))
     
  return filtered; 
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
