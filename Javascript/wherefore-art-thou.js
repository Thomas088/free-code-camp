function whatIsInAName(collection, source) {

// NON TROUVE ! 

// Essai (4/6 Done)

 let arr =[];
  let srcKey = Object.keys(source);

  // for (let i = 0, j = collection.length; i < j; i++) {
  //   for(let k = 0, l = srcKey.length; k < l; k++) {
  //     if (collection[i].hasOwnProperty(srcKey[k]) && collection[i][srcKey[k]] === source[srcKey[k]]) {
  //       arr.push(collection[i]);
  //     }    
  //   }
  // }
  // return arr ;


// Correction  

    let srcKeys = Object.keys(source);
    
    // return collection.filter(function(elt) {
    //   for (let i = 0; i < srcKeys.length; i++) {
    //     if (!elt.hasOwnProperty(srcKeys[i]) || elt[srcKeys[i]] !== source[srcKeys[i]]) {
    //       return false;
    //     }
    //   }
    //   return true; 
    // })

// We filter through the array using .filter().
// Using a for loop we loop through each item in the object.
// We use a if statement to check if the object in the collection doesn’t have the key and the property value doesn’t match the value in source.
// We return false if the above if statement is correct. Otherwise, we return true;

    // Correction alternative

  let srcKeys = Object.keys(source); 

  return collection.filter(function(elt) {
    return srcKeys.every(function(value) {
      return elt.hasOwnProperty(value) && elt[value] === source[value];
    })
  })

// We filter through the collection using .filter().
// Next, we return a Boolean value for the .filter() method.
// Finally, we reduce to Boolean value to be returned for the .every() method.

}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
