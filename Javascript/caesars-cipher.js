function rot13(str) {
 
  const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  const rotated = ["N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M"];

  const result = [];
 
  for(let i = 0, n = str.length; i < n; i++) {    

    let positionInAlphabet = alphabet.indexOf(str[i]);

    if(positionInAlphabet === -1) {
      result.push(str[i]);
    } else {
      result.push(rotated[positionInAlphabet]);
     }
  }

  return result.join("");
}