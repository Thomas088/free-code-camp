function frankenSplice(arr1, arr2, n) {
  const sliced = arr1.slice()
  arr2.splice(n,0,arr1)
  return arr2.flat();
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
