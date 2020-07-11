function binaryAgent(str) {

  // SPLIT IN ARRAY
  let splited = str.split(" ");

  // FOR LOOP FOR 
  // - CONVERT BINARY TO DECIMALS (PARSEINT)
  // - CONVERT DECIMALS TO STRING (STRING-FROM-CHARCODE)
   
  for(let i = 0; i < splited.length; i++) {  
    splited[i] = String.fromCharCode(parseInt(splited[i], 2));
  }
  // DO NOT PUT SPACES !
  
  let joined = splited.join("");
  return joined;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
