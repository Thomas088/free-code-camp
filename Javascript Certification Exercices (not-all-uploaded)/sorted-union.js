// OPERATEUR DE RESTE SUR L'ARGUMENT 
function uniteUnique(...arr) {
// ON TRANSFORME TOUT LES ARGUMENTS EN UN TABLEAU DE 1 DIMENSION
 let flatted = arr.flat();
// ON FILTRE EN FONCTION DE L'INDEX DU NUMERO (LE NUMERO EST IL DEJA PRESENT ?)
 return flatted.filter((elt, position, array) => array.indexOf(elt) === position);
}

