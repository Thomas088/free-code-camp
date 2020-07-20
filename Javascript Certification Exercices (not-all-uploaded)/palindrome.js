function palindrome(str) {

  const regex = /[_\W\s]/g;
  let filtered = str.toLowerCase().replace(regex, "").split("");
  return filtered.join("") === filtered.reverse().join("");
 
 } 
 