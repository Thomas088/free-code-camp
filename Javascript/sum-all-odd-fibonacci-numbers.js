function sumFibs(num) {

  const arr = [0, 1];

  for(let i = 2; i <= num; i++) { // i represente Les 2 valeurs du tableau
    let a = arr[i - 1];
    let b = arr[i - 2];
    arr.push(a + b)
  }

  return arr.filter((num) => num % 2 > 0)
            .filter((elt) => elt <= num)
            .reduce((total, num) => total + num, 0)
} 

sumFibs(4);
