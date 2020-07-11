function smallestCommons(arr) {
  
  let lcm = 0; // LOWEST COMMON MULTIPLE
  let arrayToTest = [];
  let value1 = Math.min.apply(null, arr);
  let value2 = Math.max.apply(null, arr);

  // AJOUTE TOUTES LES VALEURS ENTRE MIN ET MAX DANS -> arrayToTest
  for(let i = value1; i <= value2; i++){
    arrayToTest.push(i);
  }
  // FONCTION POUR SAVOIR SI LA VALEUR EST DIVISIBLE PAR TOUS LES ITEMS DU TABLEAU
  const isDivisibleByAll = (arr, value) => arr.every(num => value % num === 0)
  
  // AJOUTE +1 SI LCM N'EST PAS DIVISIBLE PAR TOUS
  do {
    lcm++; 
  } while (!isDivisibleByAll(arrayToTest, lcm));
    
 return lcm;
}

smallestCommons([1,5]);
