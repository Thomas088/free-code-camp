function orbitalPeriod(arr) {
  
  let GM = 398600.4418;
  let earthRadius = 6367.4447;
  
  for (let i = 0, n = arr.length; i < n; i++) {
    // FORMULE
    arr[i].orbitalPeriod = Math.round(2 * Math.PI * Math.sqrt(Math.pow(earthRadius + arr[i].avgAlt, 3) / GM))
    // DELETE ALT 
    delete arr[i].avgAlt;
  }
  
  return arr;
}