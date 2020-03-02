function fearNotLetter(str) {

  // TRI TABLEAU
  let sortString = (str) => str.split("").sort().join("");

  // BOUCLE DANS LA CHAINE
  for (let i = 0; i < sortString(str).length; i++) {

  // SI ALPHABET COMPLET
    if (sortString(str).length === 26) {
      return undefined;
    }

  // lETTRES A VERIFIER
      let nextAsciiLetter = sortString(str).charCodeAt(i+1);
      let asciiLetter = sortString(str).charCodeAt(i);

  // lE CHARCODE DU PROCHAIN INDICE EST IL EGAL A CELUI DE L'ACUTEL + 1 ? 
      if (asciiLetter + 1 !== nextAsciiLetter) {
        return String.fromCharCode(asciiLetter + 1)
    }
  }
}
