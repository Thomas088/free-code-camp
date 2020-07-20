function steamrollArray(arr) {
return arr.reduce((flat, toFlat) => {
    return flat.concat(Array.isArray(toFlat) ? steamrollArray(toFlat) : toFlat);
  }, []);
}

steamrollArray([1, [2], [3, [[4]]]]);
