function sumAll(arr) {

let minNumber = Math.min.apply(null, arr);
let maxNumber = Math.max.apply(null, arr);
let total = 0;

  for(let i = minNumber, n = maxNumber; i <= n; i++) {
    total += i;
  }
return total;
}

console.log(sumAll([1, 4]));
