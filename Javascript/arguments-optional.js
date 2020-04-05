function addTogether() {
  
  let test; // TEST FOR ALL THE PARAMETERS
  
    if ([...arguments].length === 1 && typeof arguments[0] === 'number') {
      // WE USE CURRYFICATION FOR THE 2ND PARAMETER      
      return (...val) => {
        test = [...val].every((elt) => typeof elt === 'number')     
        if(test) {
          // WE ADD THE FIRST AND 2ND PARAMETERS 
          return [...arguments].reduce((v, x) => v + x, 0) + [...val].reduce((w, b) => w + b, 0)
        } else {
          return undefined
        }     
      }
    } else {
     test = [...arguments].every((elt) => typeof elt === 'number')    
     if (test) {
     let arg1 = [...arguments].reduce((c, d) => c + d, 0)
     return arg1 
      }
    }
}

console.log(addTogether(2,3));
console.log(addTogether(2)(3));
console.log(addTogether("http://bit.ly/IqT6zt"));
console.log(addTogether(2, "3"));
console.log(addTogether(2)([3]));